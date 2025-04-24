import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuationSourceListComponent } from './valuation-source-list.component';

describe('ValuationSourceListComponent', () => {
  let component: ValuationSourceListComponent;
  let fixture: ComponentFixture<ValuationSourceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValuationSourceListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValuationSourceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
