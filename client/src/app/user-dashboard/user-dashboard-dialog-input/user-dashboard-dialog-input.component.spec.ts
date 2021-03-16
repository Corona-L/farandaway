import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';

import { UserDashboardDialogInputComponent } from './user-dashboard-dialog-input.component';


describe('UserDashboardDialogInputComponent', () => {
  let component: UserDashboardDialogInputComponent;
  let fixture: ComponentFixture<UserDashboardDialogInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashboardDialogInputComponent ],
      providers: [{ provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardDialogInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // FIX: NullInjectorError: R3InjectorError(DynamicTestModule)[MatDialogRef -> MatDialogRef]:
  it('should include h1 header', () => {
    const h1 = fixture.debugElement.query(By.css('h1'));
    expect(h1.nativeElement.innerText).toContain('Trips are better');
  });

  it('should include p tag', () => {
    const p = fixture.debugElement.query(By.css('p'));
    expect(p.nativeElement.innerText).toContain('Add your friends email');
  });

  it('should render a no thanks button', () => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.innerText).toBe('No Thanks');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
