import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiClientService } from '../../api-client.service';
import { TripPollVotingComponent } from './trip-poll-voting.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

const apiClientServiceStub = {
  vote: () => {
    return {
      subscribe: () => 'I remember our first stub'
    }
  }
}

describe('TripPollVotingComponent', () => {
  let component: TripPollVotingComponent;
  let fixture: ComponentFixture<TripPollVotingComponent>;
  let de: DebugElement;
  let apiClientService: ApiClientService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TripPollVotingComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [{ provide: ApiClientService, useValue: apiClientServiceStub }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPollVotingComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    apiClientService = de.injector.get(ApiClientService);
    fixture.detectChanges();
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call handleVote when vote button is clicked', () => {
    spyOn(component, 'handleVote');
    spyOn(apiClientService, 'vote');
    const voteButton = de.nativeElement.querySelector('.btn_vote');
    voteButton.click();
    fixture.detectChanges();
    expect(component.handleVote).toHaveBeenCalled();
    expect(apiClientService.vote)
  });

  it('should call handleVote when vote button is clicked', () => {
    spyOn(apiClientService, 'vote').and.callThrough();
    component.handleVote();
    expect(apiClientService.vote).toHaveBeenCalledTimes(1);
  });

});
