import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { UserInfoService } from '../user-info.service';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

// const MockUserInfoService =  {
//   currentUserId: () => 'currentUserId has been called'
// };

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let de: DebugElement;
  let userInfoService: UserInfoService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      // providers: [{ provide: UserInfoService, useValue: MockUserInfoService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    // userInfoService = de.injector.get(UserInfoService);
    fixture.detectChanges();
  });

  // Does the login button appear on page if no user logged in
  // Mock the user
  // Test if the nav bar burger is rendered
  it('should show login button without userId', () => {
    // Check for login button
    let loginButton = de.query(By.css('button'))
    expect(loginButton.nativeElement.innerText).toBe('Log in');

    // Should make this better by querying for app-header-burger component explicitly...
    component.userId = 1;
    fixture.detectChanges();
    loginButton = de.query(By.css('button'))
    expect(loginButton).toBeFalsy();

    // spyOn(userInfoService, 'currentUserId').and.callThrough();

  });

});
