import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pgp } from './pgp';

describe('Pgp', () => {
  let component: Pgp;
  let fixture: ComponentFixture<Pgp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pgp],
    }).compileComponents();

    fixture = TestBed.createComponent(Pgp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
