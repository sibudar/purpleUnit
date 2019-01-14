import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  url: any = 'https://restcountries.eu/rest/v2/';
constructor(private http: HttpClient) { }


  getCountry(name) {
    return this.http.get(this.url + 'name/' + name) ;
  }

  getCountryByCode(code) {
    return  this.http.get(this.url + 'alpha/' + code) ;
  }

}
