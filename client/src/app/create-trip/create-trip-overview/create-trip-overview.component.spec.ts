import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { CreateTripOverviewComponent } from './create-trip-overview.component';

describe('CreateTripOverviewComponent', () => {
  let component: CreateTripOverviewComponent;
  let fixture: ComponentFixture<CreateTripOverviewComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTripOverviewComponent ],
      imports: [HttpClientModule, RouterTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTripOverviewComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
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

  // Could also test postTrip is called on create trip button clicked
  
});
