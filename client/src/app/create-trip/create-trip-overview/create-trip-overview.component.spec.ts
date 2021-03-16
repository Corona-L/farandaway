import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateTripOverviewComponent } from './create-trip-overview.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ApiClientService } from 'src/app/api-client.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

const apiClientServiceStub = {
  postTrip: () => {
    return {
      subscribe: () => 'trip posted'
    }
  }
};

describe('CreateTripOverviewComponent', () => {
  let component: CreateTripOverviewComponent;
  let fixture: ComponentFixture<CreateTripOverviewComponent>;
  let de: DebugElement;
  let apiClientService: ApiClientService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTripOverviewComponent ],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [{ provide: ApiClientService, useValue: apiClientServiceStub }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTripOverviewComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    apiClientService = de.injector.get(ApiClientService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a trip title', () => {
    const title = de.query(By.css('h1'));
    expect(title).toBeTruthy();
  });

  it('should render the trip option outer container', () => {
    const optionsContainer = de.query(By.css('.options_outer_container'));
    expect(optionsContainer).toBeTruthy();
  });

  it('should render the create trip button', () => {
    const button = de.query(By.css('button'));
    expect(button.nativeElement.innerText).toBe('Create Trip');
  });

  it('button click should trigger posttrip function', () => {
    spyOn(component, 'postTrip');
    const button = de.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges;
    expect(component.postTrip).toHaveBeenCalled();
  });

  it('posttrip function should trigger API call', () => {
    spyOn(apiClientService, 'postTrip').and.callThrough();
    component.postTrip();
    fixture.detectChanges();
    expect(apiClientService.postTrip).toHaveBeenCalledTimes(1);
  });
});
