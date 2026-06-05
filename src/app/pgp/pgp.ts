import { Component } from '@angular/core';

@Component({
  selector: 'app-pgp',
  standalone: true,
  imports: [],
  templateUrl: './pgp.html',
  styleUrl: './pgp.css',
})
export class Pgp {
  publicKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----

xjMEaiLcURYJKwYBBAHaRw8BAQdACKAKVwMDeAKhBXWfYgrNp9yA1yQ+rUji
LZirGEuv0zzNJkNoYXJpcyBLeXJpYWtpZGlzIDxub3R5ZXN0dkBnbWFpbC5j
b20+wsATBBMWCgCFBYJqItxRAwsJBwkQFH870NTRtDNFFAAAAAAAHAAgc2Fs
dEBub3RhdGlvbnMub3BlbnBncGpzLm9yZ+u2o5qK2lq76CWRvwA7ddwuxr9p
ceca596m4QbAz9LHBRUKCA4MBBYAAgECGQECmwMCHgEWIQST/G3Fvf1VN3IO
+34UfzvQ1NG0MwAAhsYBAL2CYTdPnNMt3zHbhY8IFixc5zvSeklA6Ib6iy0M
1qgKAQCzl1c/ggGdaVQc6egYkZMAzB9VpqZz1z54mKJOpeJ5AM44BGoi3FES
CisGAQQBl1UBBQEBB0A5ojw7Ysx72WQ1ImnAXFUfcBnaA77kYbte95zPz3D5
CgMBCAfCvgQYFgoAcAWCaiLcUQkQFH870NTRtDNFFAAAAAAAHAAgc2FsdEBu
b3RhdGlvbnMub3BlbnBncGpzLm9yZ/O1OaxCIgO7MTPw0GEBQlcI4DwwF4fJ
iQRZmf6GpSEjApsMFiEEk/xtxb39VTdyDvt+FH870NTRtDMAAHovAQCjtB40
xA2A8IVQI8LOshmEQ26oQSluj4UjXSSSh2hjswEAuQIIVU6GKCvdBX7c0sLJ
dhM9QsdUIXPyMrGtPI+s+Q4=
=Waai
-----END PGP PUBLIC KEY BLOCK-----
`;

  isCopied = false;

  copyKey() {
    navigator.clipboard.writeText(this.publicKey);
    this.isCopied = true;
    setTimeout(() => {
      this.isCopied = false;
    }, 2000);
  }
}
