import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(public countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe(
      (res: any) => {
        this.countriesService.allCountires = res
        this.countriesService.filteredCountries = res
        this.countriesService.countriesForRestore = res
      },
      err => console.log(err)
    )
  }

  capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  applyFilter(event: Event) {
    this.countriesService.filteredCountries = this.countriesService.allCountires.filter((
      country: { name: string }) =>
      country.name.toLocaleLowerCase().includes
        ((event.target as HTMLInputElement).value))
  }

  removeCountry(countryName: string) {
    this.countriesService.allCountires = this.countriesService.allCountires.filter((country: { name: string }) => country.name !== countryName)
    this.countriesService.filteredCountries = this.countriesService.filteredCountries.filter((country: { name: string }) => country.name !== countryName)
  }

  restoreCountries() {
    this.countriesService.allCountires = this.countriesService.filteredCountries = this.countriesService.countriesForRestore
  }

}
