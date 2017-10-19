import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';

@Injectable()
export class CarsService {

	private idCount = 5;
	private car: Array<Car>;
	private cars: Array<Car> = [

		new Car(0, 'toyota', 'yaris', '2015', 240, true, 'diesel', 5),
		new Car(1, 'peugeot', '407', '2014', 220, true, 'petrol', 5),
		new Car(2, 'zastava', 'fiat', '2013', 180, true, 'electric', 5),
		new Car(3, 'mercedes', 'S', '2012', 240, true, 'hybrid', 5),
		new Car(4, 'citroen', 'model1', '2016', 210, true, 'diesel', 3),

	];

  	

	public getCars() {

	  return this.cars;
	}

	public addCar(car) {
		car.id = this.idCount;
		this.cars.push(new Car(
           car.id,
           car.mark, 
           car.model, 
           car.year, 
           car.maxSpeed, 
           car.isAutomatic, 
           car.engine, 
           car.numberOfDoors
           ));
		
		this.idCount++;
	}

	public getById(id) {
		let singleCar: Car;
		this.cars.forEach((car) => {
			if(car.id == id) {
				singleCar = car;
			}
		});
		return singleCar;
	}

	public editCar(car: Car) {
		this.cars.splice(this.cars.indexOf(car), 1, car);
	}

  constructor() { }

}
