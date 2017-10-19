import { Component, OnInit } from '@angular/core';
import { Car } from '../../shared/models/car.model';
import { CarsService } from '../../shared/services/cars.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})

export class CarFormComponent implements OnInit {
	
	cars: Array<Car>;
	private car: Car;

	years = Array(28).fill(0).map((e, i) => i + 1990);
	speed = Array(280).fill(0).map((e, i) => i + 20)

  constructor(private carsService: CarsService, private router: Router, private route: ActivatedRoute) {
		this.cars = carsService.getCars();
		this.car = new Car();
		this.route.params.subscribe(params => {
			if(params['id']){
				this.car = carsService.getById(params['id']);
			}
		}); 
  }

	public submit(car) {
		if(this.car['id']) {
			this.carsService.editCar(this.car);
		} else {
			this.carsService.addCar(this.car);
		}
		this.router.navigate(['/cars']);
	}

	public previewCar(car) {
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
