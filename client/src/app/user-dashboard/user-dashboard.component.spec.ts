import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { UserDashboardComponent } from './user-dashboard.component';
import { By } from '@angular/platform-browser';

describe('UserDashboardComponent', () => {
  let component: UserDashboardComponent;
  let fixture: ComponentFixture<UserDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardComponent);
    component = fixture.componentInstance;
    // let de = fixture.debugElement;
    fixture.detectChanges();
  });

  // it('should have a `Create trip` button', () => {
  //   expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Alert Button');
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
