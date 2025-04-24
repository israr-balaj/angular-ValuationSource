import { Component } from '@angular/core';
import { ValuationSourceListComponent } from './valuation-source-list/valuation-source-list.component';
import { ValuationSourceFormComponent } from './valuation-source-form/valuation-source-form.component';
import { ValuationSource } from '../models/valuation-source.model';



@Component({
  selector: 'app-valuation-source',
  standalone: true,
  imports: [ValuationSourceListComponent, ValuationSourceFormComponent],
  templateUrl: './valuation-source.component.html',
  styleUrl: './valuation-source.component.css'
})
export class ValuationSourceComponent {
  selectedSource: ValuationSource | null = null;

  onSourceSelected(source: ValuationSource) {
    this.selectedSource = source;
    console.table(this.selectedSource);
  }
}
