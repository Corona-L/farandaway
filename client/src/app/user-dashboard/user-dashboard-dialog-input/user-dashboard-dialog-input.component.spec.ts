import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { UserDashboardDialogInputComponent } from './user-dashboard-dialog-input.component';

describe('UserDashboardDialogInputComponent', () => {
  let component: UserDashboardDialogInputComponent;
  let fixture: ComponentFixture<UserDashboardDialogInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashboardDialogInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardDialogInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // FIX: NullInjectorError: R3InjectorError(DynamicTestModule)[MatDialogRef -> MatDialogRef]:
  // it('should include h1 header', () => {
  //   const h1 = fixture.debugElement.query(By.css('h1'));
  //   expect(h1.nativeElement.innerText).toBe('Trips are better');
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
