import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorsiPage } from './corsi.page';

describe('CorsiPage', () => {
  let component: CorsiPage;
  let fixture: ComponentFixture<CorsiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CorsiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
