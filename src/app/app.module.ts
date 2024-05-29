import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstateListComponent } from './components/estate/estate-list/estate-list.component';
import { TopMenuComponent } from './components/menu/top-menu/top-menu.component';
import { EstateService } from './services/estate.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterService } from './services/filter.service';
import { FormsModule } from '@angular/forms';
import { FilterPanelComponent } from './components/filter/filter-panel/filter-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    EstateListComponent,
    TopMenuComponent,
    FilterPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    EstateService,
    FilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
