import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardNotripsComponent } from './user-dashboard-notrips.component';
import { By } from '@angular/platform-browser';



describe('UserDashboardNotripsComponent', () => {
  let component: UserDashboardNotripsComponent;
  let fixture: ComponentFixture<UserDashboardNotripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashboardNotripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardNotripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a no trips message', () => {
    const message = fixture.debugElement.query(By.css('h3'));
    expect(message.nativeElement.innerText).toContain('No trips to display');

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
