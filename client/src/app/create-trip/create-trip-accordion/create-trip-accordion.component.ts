import {Component, EventEmitter, Output} from '@angular/core';
import { TripOption } from 'src/app/interfaces/trip-option';

@Component({
  selector: 'app-create-trip-accordion',
  templateUrl: './create-trip-accordion.component.html',
  styleUrls: ['./create-trip-accordion.component.css']
})
export class CreateTripAccordionComponent {

  @Output() newTripOptionEvent = new EventEmitter<TripOption>()

  step: number = 0;
  destination : string = '';
  startDate: string = '';
  nights: number = 1;
  budgetRangeMin: number = 200;
  budgetRangeMax: number = 800;

  addTripOption() {
    const newTrip = {destination: this.destination, startDate: this.startDate,
    nights: this.nights, budgetRangeMin: this.budgetRangeMin, budgetRangeMax: this.budgetRangeMax}
    this.newTripOptionEvent.emit(newTrip)
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
