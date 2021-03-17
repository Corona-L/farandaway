import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

import { UserDashboardDialogButtonComponent } from './user-dashboard-dialog-button.component';

describe('UserDashboardDialogButtonComponent', () => {
  let component: UserDashboardDialogButtonComponent;
  let fixture: ComponentFixture<UserDashboardDialogButtonComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashboardDialogButtonComponent ],
      imports: [ MatDialogModule, HttpClientModule, RouterTestingModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardDialogButtonComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the button should correctly call openDialog()', () => {
    spyOn(component, 'openDialog');
    const button = de.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    expect(component.openDialog).toHaveBeenCalledTimes(1);
    button.click();
    fixture.detectChanges();
    expect(component.openDialog).toHaveBeenCalledTimes(2);
  });
});
