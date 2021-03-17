import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';

import { HeaderBurgerComponent } from './header-burger.component';

import { UserInfoService } from '../../user-info.service';

const userInfoServiceStub = {
  changeCurrentUserId: () => {}
}

describe('HeaderBurgerComponent', () => {
  let component: HeaderBurgerComponent;
  let fixture: ComponentFixture<HeaderBurgerComponent>;
  let de: DebugElement;
  let userInfoService: UserInfoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBurgerComponent ],
      imports: [ RouterTestingModule, HttpClientModule, MatMenuModule ],
      providers: [{ provide: UserInfoService, useValue: userInfoServiceStub }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBurgerComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    userInfoService = de.injector.get(UserInfoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call userInfoService.changeCurrentUserId when logOut() is called', () => {
    spyOn(userInfoService, 'changeCurrentUserId');
    component.logOut();
    fixture.detectChanges();
    expect(userInfoService.changeCurrentUserId).toHaveBeenCalled();
  });

});
