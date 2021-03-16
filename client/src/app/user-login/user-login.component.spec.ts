import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ApiClientService } from '../api-client.service';
import { RouterTestingModule } from '@angular/router/testing';
// import { Router } from '@angular/router';
import { ApiClientService } from '../api-client.service';
import { UserLoginComponent } from './user-login.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

const apiClientServiceStub = {
  userLogin: () => {
    return 'apiClientService.userLogin has been called'
  }
}

describe('UserLoginComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;
  let de: DebugElement;
  let apiClientService: ApiClientService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoginComponent ],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [{provide: ApiClientService, useValue: apiClientServiceStub }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    apiClientService = de.injector.get(ApiClientService);
    fixture.detectChanges();
  });

  // Test cocktails by the pool is rendered
  it('should render an h1 ', () => {
    let header = fixture.debugElement.query(By.css('h1'));
    expect(header).toBeTruthy();
    expect(header.nativeElement.innerText).toContain('Cocktails by the');
  });

  // Test the form gets rendered
  it('should render an input form of class login_form', () => {
    let form = de.query(By.css('.login_form'))
    expect(form).toBeTruthy();
  });

  // Test the inputs get rendered correctly name="emailAddress" && name="password"
  it('should render the correct login inputs', () => {
    const emailInput = de.query(By.css('input[name=emailAddress]'));
    const nameInput = de.query(By.css('input[name=password]'));
    expect(emailInput).toBeTruthy();
    expect(nameInput).toBeTruthy();
  });

  // By.css('.classname')          // get by class name
  // By.css('input[type=radio]')   // get input by type radio
  // By.css('.parent .child')      // get child who has a parent

  // Test the button is correctly rendered text = 'Log in'
  it('should render the login button', () => {
    const loginButton = de.query(By.css('button'));
    expect(loginButton.nativeElement.innerText).toBe('Log in');
  });

  // Test register link is rendered
  it('should correctly render the register link', () => {
    const link = de.query(By.css('a'));
    expect(link.nativeElement.innerText).toContain('Don\'t have an account?');
  });

  // it('should call userLogin', () => {
    //   // We need to pass email and password to userLogin

    //   spyOn(apiClientService, 'userLogin').and.callThrough();
    //   const form =
    // });
});
