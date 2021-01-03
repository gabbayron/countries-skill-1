import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  allCountires: any = []
  filteredCountries: any = []
  countriesForRestore: any = []
  getCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/all')
  }

}
