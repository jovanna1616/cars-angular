import { Component, OnInit } from '@angular/core';
import { Car } from '../../shared/models/car.model';
import { CarsService } from '../../shared/services/cars.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})

export class CarFormComponent implements OnInit {

	cars: Array<Car>;
	car: Car = new Car();

	years = Array(28).fill(0).map((e, i) => i + 1990);

  constructor(private carsService: CarsService, private router: Router) {
		this.cars = carsService.getCars();
		
  }


	addCar(car: Car) {

		this.carsService.addCar(car);
		console.log('ggggggg');
		this.router.navigate(['/cars']);

	}

	previewCar(car) {
		alert(
      [
      	car.mark,
      	car.model,
      	car.year,
      	car.maxSpeed,
      	car.isAutomatic,
      	car.engine,
      	car.numberOfDoors
      ]
    );
	}
	
  ngOnInit() {
  }

}
