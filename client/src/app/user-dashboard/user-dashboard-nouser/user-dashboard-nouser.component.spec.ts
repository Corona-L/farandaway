import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDashboardNouserComponent } from './user-dashboard-nouser.component';
import { By } from '@angular/platform-browser';

describe('UserDashboardNouserComponent', () => {
  let component: UserDashboardNouserComponent;
  let fixture: ComponentFixture<UserDashboardNouserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashboardNouserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardNouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should include a h1 header', () => {
    const h1 = fixture.debugElement.query(By.css('h1'));
    expect(h1).toBeTruthy();
    expect(h1.nativeElement.innerText).toContain('Log in to see all');
  });

  it('should have a login button', () => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button).toBeTruthy();
    expect(button.nativeElement.innerText).toEqual('Log in');
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
