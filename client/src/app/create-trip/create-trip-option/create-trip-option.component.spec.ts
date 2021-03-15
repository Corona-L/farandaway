import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CreateTripOptionComponent } from './create-trip-option.component';

const mocks = {
  tripOption: {
    title: 'string',
    destination: 'string',
    startDate: '2011-10-10T14:48:00',
    nights: 1,
    budgetRangeMin: 1,
    budgetRangeMax: 1,
    votes: 1,
    isChosen: true,
  }
};

describe('CreateTripOptionComponent', () => {
  let component: CreateTripOptionComponent;
  let fixture: ComponentFixture<CreateTripOptionComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTripOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTripOptionComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  // With tripOption
  // p with class trip_option_label_small
  it('if tripOption: should render p element', () => {
    component.tripOption = mocks.tripOption;
    fixture.detectChanges();
    const p = de.query(By.css('.trip_option_label_small'));
    expect(p).toBeTruthy();
  });
  
  // h2 element
  it('if tripOption: should render h2 element', () => {
    component.tripOption = mocks.tripOption;
    fixture.detectChanges();
    const h2 = de.query(By.css('h2'));
    expect(h2).toBeTruthy();
  });

  // Without tripOption
  // if clicked
  // form with class trip_option_form
  it('!tripOption & clicked: should render a form', () => {
    component.clicked = true;
    fixture.detectChanges();
    const form = de.query(By.css('form'));
    expect(form).toBeTruthy();
  });
  // No trip option or clicked
  // p with 'Add a variant to your trip'
  it('should render add variant p tag', () => {
    component.clicked = false;
    fixture.detectChanges();
    const p = de.query(By.css('p'));
    expect(p.nativeElement.innerText).toBe('Add a variant to your trip');
  });

  // button with '+'
  it('should render button', () => {
    component.clicked = false;
    fixture.detectChanges();
    const button = de.query(By.css('button'));
    expect(button.nativeElement.innerText).toBe('+');
  });

});
