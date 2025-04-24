import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccessoPage } from './accesso.page';

describe('AccessoPage', () => {
  let component: AccessoPage;
  let fixture: ComponentFixture<AccessoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
