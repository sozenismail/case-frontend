import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private apiUrl = environment.apiUrl;

  private selectedCitySource = new BehaviorSubject<{ id: number, name: string } | null>(null);
  selectedCity$ = this.selectedCitySource.asObservable();

  private priceFilterSource = new BehaviorSubject<{ minPrice: number | null, maxPrice: number | null }>({ minPrice: null, maxPrice: null });
  priceFilter$ = this.priceFilterSource.asObservable();


  selectCity(cityId: number, cityName: string) {
    this.selectedCitySource.next({ id: cityId, name: cityName });
  }

  setPriceFilter(minPrice: number | null, maxPrice: number | null) {
    this.priceFilterSource.next({ minPrice, maxPrice });
  }

  constructor(private http: HttpClient) {}

  getAllCity(): Observable<any> {
    return this.http.get(this.apiUrl+"/City/GetAllCities");
  }


}
