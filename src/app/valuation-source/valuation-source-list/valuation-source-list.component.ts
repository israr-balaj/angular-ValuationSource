import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ValuationSource } from '../../models/valuation-source.model';



//interface ValuationSource {
//  valuationSourceID: number;
//  valuationSourceName: string;
//  valuationSort: number;
//}

@Component({
  selector: 'app-valuation-source-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './valuation-source-list.component.html',
  styleUrl: './valuation-source-list.component.css'
})
export class ValuationSourceListComponent {
  constructor(private http: HttpClient) { }

  @Output() selectSource = new EventEmitter<ValuationSource>();

  sources: ValuationSource[] = [];
  selectedId: number | null = null;

  ngOnInit(): void {
    this.loadValuationSources();
  }

  loadValuationSources() {
    this.http.get<ValuationSource[]>('https://localhost:7010/api/ValuationSource/GetList')
      .subscribe({
        next: (data) => {
          this.sources = data.sort((a, b) => a.sort - b.sort);
        },
        error: (err) => {
          console.error('Failed to load valuation sources', err);
        }
      });
  }

  onSelect(source: ValuationSource) {
    this.selectedId = source.valuationSourceID;
    this.selectSource.emit(source);
  }

}
