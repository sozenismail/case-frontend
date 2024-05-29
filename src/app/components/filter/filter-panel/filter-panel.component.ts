import { Component } from '@angular/core';
import { City } from 'src/app/models/City';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css']
})
export class FilterPanelComponent {


  selectedCity: string | null = null;
  cities: City[] = [];
  minPrice: number | null = null;
  maxPrice: number | null = null;

  constructor(private filterService: FilterService) {}

  ngOnInit() {
    this.filterService.getAllCity().subscribe((cityData: { data: City[] }) => {
      this.cities = cityData.data;
    });
  }

  selectCity(cityId: number, cityName: string): void {
    this.selectedCity = cityName;
    this.filterService.selectCity(cityId, cityName);
  }

  applyFilter() {
    this.filterService.setPriceFilter(this.minPrice, this.maxPrice);
  }


}
