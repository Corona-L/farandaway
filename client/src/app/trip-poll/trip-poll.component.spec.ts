import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiClientService } from '../api-client.service';

import { TripPollComponent } from './trip-poll.component';

const apiClientServiceStub = {
  getTrip: () => {
    return {
      subscribe: () => {}
    }
  }
};

describe('TripPollComponent', () => {
  let component: TripPollComponent;
  let fixture: ComponentFixture<TripPollComponent>;
  let de: DebugElement;
  let apiClientService: ApiClientService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripPollComponent ],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [{provide: ApiClientService, useValue: apiClientServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPollComponent);
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
    const h1 = de.nativeElement.querySelector('h1');
    const p = de.nativeElement.querySelector('p');
    const votingContainer = de.nativeElement.querySelector('.voting_container');
    if (!component.trip) throw new Error('No trip has been supplied');
    expect(h1.innerText).toBe(component.trip.title);
    expect(p).toBeTruthy();
    expect(votingContainer).toBeTruthy();
  });

  it('should call get api service when getTrip is called', () => {
    spyOn(apiClientService, 'getTrip').and.callThrough();
    if (!component || !component.trip || !component.trip.id) throw new Error('!!!! No trip has been supplied');
    component.getTrip(component.trip.id);
    expect(apiClientService.getTrip).toHaveBeenCalledWith(component.trip.id);
  });

});
