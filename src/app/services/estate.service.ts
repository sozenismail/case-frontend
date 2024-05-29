import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EstateFilterDto } from '../models/EstateFilterDto';

@Injectable({
  providedIn: 'root'
})
export class EstateService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllEstate(filter: EstateFilterDto): Observable<any> {
    let params = new HttpParams();

    if (filter.cityId !== undefined) {
      params = params.set('cityId', filter.cityId.toString());
    }
    if (filter.maxPrice !== undefined) {
      params = params.set('maxPrice', filter.maxPrice.toString());
    }
    if (filter.minPrice !== undefined) {
      params = params.set('minPrice', filter.minPrice.toString());
    }
    if (filter.maxM2 !== undefined) {
      params = params.set('maxM2', filter.maxM2.toString());
    }
    if (filter.minM2 !== undefined) {
      params = params.set('minM2', filter.minM2.toString());
    }

    return this.http.get(this.apiUrl + "/Estate/GetAllFilteredEstates", { params });
  }

}
