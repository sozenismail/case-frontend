import { Component, ElementRef } from '@angular/core';
import { Estate } from 'src/app/models/Estate';
import { EstateFilterDto } from 'src/app/models/EstateFilterDto';
import { FilterService } from 'src/app/services/filter.service';
import { EstateService } from 'src/app/services/estate.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-estate-list',
  templateUrl: './estate-list.component.html',
  styleUrls: ['./estate-list.component.css']
})
export class EstateListComponent {

  apiUrl = environment.apiUrl;
  estates: Estate[] = [];
  filteredEstate : EstateFilterDto ={cityId:0,minPrice:0,maxPrice:0,minM2:0,maxM2:0};

  constructor(private el: ElementRef, private estateService: EstateService,private filterService: FilterService) {
  }

  ngOnInit() {

    this.filterService.selectedCity$.subscribe(item => {
      if (item) {
        this.filteredEstate.cityId=item.id;
        this.fetchEstatesByFilter(this.filteredEstate)
      }
    });

    this.filterService.priceFilter$.subscribe(item => {
      if(item.minPrice){
        this.filteredEstate.minPrice=item.minPrice;
      }
      if(item.maxPrice){
        this.filteredEstate.maxPrice=item.maxPrice;
      }
      this.fetchEstatesByFilter(this.filteredEstate)
    });

  }


  fetchEstatesByFilter(estateFilterDto: EstateFilterDto): void {

    const filter: EstateFilterDto = {
      cityId: estateFilterDto.cityId == 0 ? undefined : estateFilterDto.cityId,
      maxPrice:  estateFilterDto.maxPrice == 0 ? undefined : estateFilterDto.maxPrice,
      minPrice: estateFilterDto.minPrice == 0 ? undefined : estateFilterDto.minPrice,
      maxM2: 100000,
      minM2: 0
    };

    this.estateService.getAllEstate(filter).subscribe(estate => {
      this.estates = estate.data;
    });


  }

}
