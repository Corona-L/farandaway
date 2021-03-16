import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserDashboardComponent } from './user-dashboard.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


describe('UserDashboardComponent', () => {
  let component: UserDashboardComponent;
  let fixture: ComponentFixture<UserDashboardComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDashboardComponent],
      imports: [HttpClientModule, RouterTestingModule],
    })
      .compileComponents();
  });

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

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    component.user = { emailAddress: 'corona', firstName: 'corona', lastName: 'corona', password: '123' };
    component.trips = [{
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
    }];
    fixture.detectChanges();
  });

  it('should include a h1 header', () => {
    const h1 = fixture.debugElement.query(By.css('h1'));
    expect(h1).toBeTruthy();
    expect(h1.nativeElement.innerText).toContain('Hello');
  });


  it('should have a p tag that greets user', () => {
    const p = de.query(By.css('p'));
    expect(p).toBeTruthy();
    expect(p.nativeElement.innerText).toContain('Keep up to date');
  });

  it('should show a button `Create trip`', () => {
    const button = de.query(By.css('button'));
    expect(button.nativeElement.innerText).toContain('Create trip');
  });

  it('should render trip title when user has saved trips', () => {
    const h4 = de.query(By.css('h4'));
    if (component.trips === undefined) throw new Error('no trips');
    expect(h4.nativeElement.innerText).toContain(component.trips[0].title);
  });

  it('should render user trips block correctly', () => {
    const sendButton = de.query(By.css('.btn_send'));
    const infoButton = de.query(By.css('.dashboard_more_info'));
    const resultsButton = de.query(By.css('.dashboard_results'));
    expect(sendButton).toBeTruthy();
    expect(infoButton.nativeElement.innerText).toBe('More info');
    expect(resultsButton.nativeElement.innerText).toBe('Results');
  });




  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
