import { Component } from '@angular/core';
import {CountryServiceService} from './countryService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search: string ;
  result: object = {};
  found: boolean = false ;
  border: any[] = [] ;
  borderNames: string[] = [];

  constructor(private service: CountryServiceService) {

  }
  searchCountry() {
    this.service.getCountry(this.search).subscribe( data => {
      this.result = data ;
      this.border = this.result[0].borders;

      this.border.forEach(element => {
        this.service.getCountryByCode(element).subscribe( (res)=>{
          this.borderNames.push(res.name);
          console.log(this.borderNames) ;
          this.found= true ;
        });
      });

      console.log(this.border);
  }
}
