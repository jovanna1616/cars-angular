import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';

@Injectable()
export class CarsService {

	private idCount: number;
	private car: Array<Car>;

	private cars: Array<Car> = [

		new Car(0, 'toyota', 'yaris', '2015', 240, false, 'diesel', 5),
		new Car(1, 'peugeot', '407', '2014', 220, false, 'petrol', 5),
		new Car(2, 'zastava', 'fiat', '2013', 180, false, 'electric', 5),
		new Car(3, 'mercedes', 'S', '2012', 240, true, 'hybrid', 5),
		new Car(4, 'citroen', 'model1', '2016', 210, true, 'diesel', 3),

	];

  	

	getCars() {

	  return this.cars;
	}

	addCar(car) {
		car.id = this.cars.length;
		// console.log(car.id);
		this.cars.push(new Car(car.id,car.mark, car.model, car.year, car.maxSpeed, car.isAutomatic, car.engine, car.numberOfDoors));
		this.idCount = this.cars.length + 1;
	}

  constructor() { }

}
