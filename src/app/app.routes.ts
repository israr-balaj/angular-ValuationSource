import { Routes } from '@angular/router';
import { ValuationSourceComponent } from './valuation-source/valuation-source.component';


export const routes: Routes = [
  { path: 'valuationsource', component: ValuationSourceComponent },
  { path: '', redirectTo: 'valuationsource', pathMatch: 'full' } // optional default
];
