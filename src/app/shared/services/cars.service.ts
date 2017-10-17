import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';

@Injectable()
export class CarsService {

	private cars = [

		new Car(1, 'toyota', 'yaris', '2015', 240, false, 'engine1', 5),
		new Car(2, 'peugeot', '407', '2014', 220, false, 'engine2', 5),
		new Car(3, 'zastava', 'fiat', '2013', 180, false, 'engine1', 5),
		new Car(4, 'mercedes', 'S', '2012', 240, true, 'engine3', 5),
		new Car(5, 'citroen', 'model1', '2016', 210, true, 'engine4', 3),

	];

  

    getCars() {

	  return this.cars;
    }

  constructor() { }

}
