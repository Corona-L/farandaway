import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TripOption } from '../../interfaces/trip-option'

import { TripPollBarsComponent } from './trip-poll-bars.component';

describe('TripPollBarsComponent', () => {
  let component: TripPollBarsComponent;
  let fixture: ComponentFixture<TripPollBarsComponent>;
  let de: DebugElement;
  let option: TripOption;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripPollBarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPollBarsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    component.option = {
      title: 'string',
      destination: 'string',
      startDate: '2011-10-10T14:48:00',
      nights: 1,
      budgetRangeMin: 1,
      budgetRangeMax: 1,
      votes: 1,
      isChosen: true,
    };
    option = component.option;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render page correctlu', () => {
    const el = de.nativeElement;
    const h1 = el.querySelector('h1');
    expect(+h1.innerText).toBe(option.votes);

    const h3 = el.querySelector('h3');
    expect(h3.innerText).toBe(option.title);

    const paragraphs = el.querySelectorAll('p');
    expect(paragraphs.length).toEqual(3);

    expect(paragraphs[0].innerText).toBe(option.destination);
    expect(paragraphs[2].innerText).toContain(option.nights);
  });

});
