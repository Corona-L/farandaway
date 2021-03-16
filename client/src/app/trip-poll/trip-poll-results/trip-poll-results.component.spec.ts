import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiClientService } from 'src/app/api-client.service';

import { TripPollResultsComponent } from './trip-poll-results.component';

const apiClientServiceStub = {
  getTrip: () => {
    return {
      subscribe: () => {}
    }
  }
};

describe('TripPollResultsComponent', () => {
  let component: TripPollResultsComponent;
  let fixture: ComponentFixture<TripPollResultsComponent>;
  let de: DebugElement;
  let apiClientService: ApiClientService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripPollResultsComponent ],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [{provide: ApiClientService, useValue: apiClientServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPollResultsComponent);
    component = fixture.componentInstance;
    component.trip = {
      id: 1,
      title: 'Summer holiday',
      options: [{
        title: 'string',
        destination: 'string',
        startDate: '2011-10-10T14:48:00',
        nights: 1,
        budgetRangeMin: 1,
        budgetRangeMax: 1,
        votes: 1,
        isChosen: true,
      }]
    };
    de = fixture.debugElement;
    apiClientService = de.injector.get(ApiClientService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should properly render elements', () => {
    const el = de.nativeElement;
    const resultsContainer = el.querySelector('.results_container');
    expect(resultsContainer).toBeTruthy();

    const h1 = el.querySelector('h1');
    expect(h1.innerText).toBe(component.trip?.title);

    const button = el.querySelector('button');
    expect(button.innerText).toBe('Back to trips');

    const resultsBarContainer = el.querySelector('.results_bar_container');
    expect(resultsBarContainer).toBeTruthy();

    const resultBar1 = el.querySelector('.result_bar_first');
    expect(resultBar1).toBeTruthy();

    const resultBar2 = el.querySelector('.result_bar_second');
    expect(resultBar2).toBeTruthy();

    const resultBar3 = el.querySelector('.result_bar_third');
    expect(resultBar3).toBeTruthy();
  });

  it('getTripInfo fn should properly call the apiCLientService.getTripInfo', () => {
    spyOn(apiClientService, 'getTrip').and.callThrough();
    component.getTripInfo(1);
    fixture.detectChanges();
    expect(apiClientService.getTrip).toHaveBeenCalledWith(1);
  });

});
