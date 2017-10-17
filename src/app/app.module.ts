import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CarsComponent } from './components/cars/cars.component';
import { CarsService } from './shared/services/cars.service';
import { CarFormComponent } from './components/car-form/car-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CarsComponent,
    CarFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  exports: [
  	LayoutComponent,
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
