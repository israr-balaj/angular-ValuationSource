import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValuationSourceService } from '../../valuation-source.service';
import { ValuationSource } from '../../models/valuation-source.model';


@Component({
  selector: 'app-valuation-source-form',
  standalone: true,
  imports: [ FormsModule,CommonModule],  // Import HttpClientModule for HTTP requests
  templateUrl: './valuation-source-form.component.html',
  styleUrls: ['./valuation-source-form.component.css']
})
export class ValuationSourceFormComponent implements OnChanges {
  //@Input() selectedSource: { valuationSourceID: number, valuationSourceName: string } | null = null;
  @Input() selectedSource: ValuationSource | null = null;
  @Output() clearSelection = new EventEmitter<void>();
  @Output() refreshList = new EventEmitter<void>();


  //form = {
  //  valuationSourceID: '',
  //  valuationSourceName: ''
  //};

  constructor(private valuationSourceService: ValuationSourceService) { }

  resetForm() {
    // Clear the form by resetting the selectedValuationSource to default empty values
    this.selectedValuationSource = {
      valuationSourceID: 0,
      valuationSourceName: '',
      sort: 0,
      sourceContactName: '',
      sourceAddress1: '',
      sourceAddress2: '',
      sourceCity: '',
      sourceState: '',
      sourceZip: '',
      sourceContactMethod1: '',
      sourceContactMethod2: '',
      sourceContactMethod3: '',
      latitude: 0,
      longitude: 0,
      geoLocation: ''
    };

    // Notify parent component to clear selectedSource as well
    this.clearSelection.emit();
  }


ngOnChanges(changes: SimpleChanges) {
  if (changes['selectedSource']) {
    const source = changes['selectedSource'].currentValue;
    if (source) {
      // Copy the selected source data to selectedValuationSource
      this.selectedValuationSource = { ...source };
    } else {
      // Reset form if no source is selected
      this.selectedValuationSource = {
        valuationSourceID: 0,
        valuationSourceName: '',
        sort: 0,
        sourceContactName: '',
        sourceAddress1: '',
        sourceAddress2: '',
        sourceCity: '',
        sourceState: '',
        sourceZip: '',
        sourceContactMethod1: '',
        sourceContactMethod2: '',
        sourceContactMethod3: '',
        latitude: 0,
        longitude: 0,
        geoLocation: ''
      };
    }
  }
}



  selectedValuationSource: ValuationSource = {
    valuationSourceID: 0,
    valuationSourceName: '',
    sort: 0,
    sourceContactName: '',
    sourceAddress1: '',
    sourceAddress2: '',
    sourceCity: '',
    sourceState: '',
    sourceZip: '',
    sourceContactMethod1: '',
    sourceContactMethod2: '',
    sourceContactMethod3: '',
    latitude: 0,
    longitude: 0,
    geoLocation: ''
  };


  onSubmit(form: any) {

    if (form.invalid) { return; }
    if (this.selectedValuationSource && this.selectedValuationSource.valuationSourceID !==0) {
      //Update: Send full object
      this.valuationSourceService.updateValuationSource(this.selectedValuationSource).subscribe({
        next: () => {
          console.log('Updated successfully');
          this.resetForm(); // Optional: reset the form after update
          this.refreshList.emit();
        },
        error: err => {
          console.error('Update failed', err);
        }
      });
    } else {
      const insert = {
        valuationSourceName: this.selectedValuationSource?.valuationSourceName || ''
      };

      this.valuationSourceService.insertValuationSource(insert).subscribe({
        next: () => {
          console.log('Inserted successfully');
          this.resetForm(); // Optional: reset the form after insert
          this.refreshList.emit();
          console.log('refreshList emitted'); 
        },
        error: err => {
          console.error('Insert failed', err);
        }
      });
    }
  }


}
