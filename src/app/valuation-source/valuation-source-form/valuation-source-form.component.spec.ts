import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuationSourceFormComponent } from './valuation-source-form.component';

describe('ValuationSourceFormComponent', () => {
  let component: ValuationSourceFormComponent;
  let fixture: ComponentFixture<ValuationSourceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValuationSourceFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValuationSourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
