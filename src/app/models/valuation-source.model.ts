export interface ValuationSource {
  valuationSourceID: number | 0;
  valuationSourceName: string | '';
  sort: number | 0;

  sourceContactName: string | '';
  sourceAddress1: string | '';
  sourceAddress2: string | '';
  sourceCity: string | '';
  sourceState: string | '';
  sourceZip: string | 0;

  sourceContactMethod1: string | '';
  sourceContactMethod2: string | '';
  sourceContactMethod3: string | '';

  latitude: number | 0;
  longitude: number | 0;
  geoLocation: string | '';
}
