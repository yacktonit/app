import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChiSiamoPage } from './chisiamo.page';

describe('ChiSiamoPage', () => {
  let component: ChiSiamoPage;
  let fixture: ComponentFixture<ChiSiamoPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChiSiamoPage]
    }).compileComponents();

    fixture = TestBed.createComponent(ChiSiamoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
