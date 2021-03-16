import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserSignupComponent } from './user-signup.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ApiClientService } from '../api-client.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

const apiClientServiceStub = {
  userSignUp: () => {
    return {
      subscribe: () => 'user signed up'
    }
  }
};

describe('UserSignupComponent', () => {
  let component: UserSignupComponent;
  let fixture: ComponentFixture<UserSignupComponent>;
  let de: DebugElement;
  let apiClientService: ApiClientService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSignupComponent ],
      imports: [ RouterTestingModule, HttpClientModule ],
      providers: [{ provide: ApiClientService, useValue: apiClientServiceStub}]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSignupComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    apiClientService = de.injector.get(ApiClientService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a h1 tag', () => {
    const title = de.query(By.css('h1'));
    expect(title).toBeTruthy();
  });

  it('should render four input fields', () => {
    const textInput = de.query(By.css('.text_input_large'));
    expect(textInput).toBeTruthy();
  });

  it('should render a sign up button', () => {
    const button = de.query(By.css('button'));
    expect(button.nativeElement.innerText).toBe('Sign up');
  });

  it('userSignup should call API client service', () => {
    spyOn(apiClientService, 'userSignUp').and.callThrough();
    component.userSignUp();
    fixture.detectChanges();
    expect(apiClientService.userSignUp).toHaveBeenCalled();
  });
});
