import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserSignupComponent } from './user-signup.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ApiClientService } from '../api-client.service';
import { DebugElement } from '@angular/core';

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

  it('userSignup should call API client service', () => {
    spyOn(apiClientService, 'userSignUp').and.callThrough();
    component.userSignUp();
    fixture.detectChanges();
    expect(apiClientService.userSignUp).toHaveBeenCalled();
  });
});
