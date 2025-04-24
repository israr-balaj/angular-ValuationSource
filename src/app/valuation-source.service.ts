import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ValuationSource } from './models/valuation-source.model';


@Injectable({
  providedIn: 'root'
})
export class ValuationSourceService {

  private apiUrl = 'https://localhost:7010/api/ValuationSource';  // Adjust to your API base URL

  constructor(private http: HttpClient) { }

  // Method to call Insert endpoint
  insertValuationSource(request: { valuationSourceName: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Insert`, request);
  }

  updateValuationSource(request: ValuationSource): Observable<any> {
    return this.http.put(`${this.apiUrl}/Update/${request.valuationSourceID}`, request);

  }
}
