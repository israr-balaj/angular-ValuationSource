import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuationSourceComponent } from './valuation-source.component';

describe('ValuationSourceComponent', () => {
  let component: ValuationSourceComponent;
  let fixture: ComponentFixture<ValuationSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValuationSourceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValuationSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
