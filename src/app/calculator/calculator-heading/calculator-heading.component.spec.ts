import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorHeadingComponent } from './calculator-heading.component';

describe('CalculatorHeadingComponent', () => {
  let component: CalculatorHeadingComponent;
  let fixture: ComponentFixture<CalculatorHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
