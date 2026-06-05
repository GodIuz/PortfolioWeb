import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, HostListener, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './terminal.html',
  styleUrl: './terminal.css',
})
export class Terminal implements AfterViewChecked {
  isVisible = false;
  command = '';
  history: string[] = [
    'Welcome to Socket & Script OS v1.0.0', 
    'Type "help" for a list of available commands.'
  ];
  
  private commandHistory: string[] = [];
  private historyIndex: number = -1;

  @ViewChild('scrollMe') private scrollContainer!: ElementRef;
  @ViewChild('input') private inputField!: ElementRef;

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      if (this.scrollContainer) {
        this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
      }
    } catch(err) { }
  }

  @HostListener('document:keydown', ['$event'])
  handleGlobalKeyboard(event: KeyboardEvent) {
    if (event.key === '`') { 
      event.preventDefault();
      this.isVisible = !this.isVisible;
      if (this.isVisible) {
        setTimeout(() => this.inputField.nativeElement.focus(), 50);
      }
    }
  }

  // Διαχείριση για τα βελάκια
  handleInputKeys(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (this.historyIndex > 0) {
        this.historyIndex--;
        this.command = this.commandHistory[this.historyIndex];
      } else if (this.historyIndex === -1 && this.commandHistory.length > 0) {
        this.historyIndex = this.commandHistory.length - 1;
        this.command = this.commandHistory[this.historyIndex];
      }
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (this.historyIndex < this.commandHistory.length - 1) {
        this.historyIndex++;
        this.command = this.commandHistory[this.historyIndex];
      } else {
        this.historyIndex = -1;
        this.command = '';
      }
    }
  }

  execute() {
    if (!this.command.trim()) {
      this.history.push('user@kyriakidis:~$ ');
      return;
    }
    
    const cmd = this.command.trim();
    this.history.push('user@kyriakidis:~$ ' + cmd);
    this.commandHistory.push(cmd);
    this.historyIndex = -1;
    const cmdLower = cmd.toLowerCase();
    this.command = '';

    setTimeout(() => {
      switch(cmdLower) {
        case 'whoami': 
          this.history.push('Charis Kiriakidis - Full-Stack Engineer'); 
          break;
        case 'clear':
          this.history = [];
          break;
        case 'cat resume.txt': 
          this.history.push('Redirecting to /resume...'); 
          window.location.href = '/resume'; 
          break;
        case 'cd projects':
          this.history.push('Navigating to /projects...');
          window.location.href = '/projects';
          break;
        case 'cat public.key': 
        case 'gpg --export':
          this.history.push('Extracting public key...'); 
          setTimeout(() => {
            window.location.href = '/pgp'; 
          }, 400);
          break;
        case 'help': 
          this.history.push('Available commands:');
          this.history.push('  whoami          Print user information');
          this.history.push('  cat resume.txt  View resume');
          this.history.push('  cd projects     Navigate to projects');
          this.history.push('  cat public.key  View PGP Public Key'); // <-- ΝΕΟ
          this.history.push('  clear           Clear terminal output');
          this.history.push('  exit            Close terminal');
          break;
        case 'exit':
          this.isVisible = false;
          break;
        default: 
          this.history.push('bash: ' + cmd + ': command not found');
      }
    }, 150);
  }
}