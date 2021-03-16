import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


import { CreateTripAccordionComponent } from './create-trip-accordion.component';

describe('CreateTripAccordionComponent', () => {
  let component: CreateTripAccordionComponent;
  let fixture: ComponentFixture<CreateTripAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTripAccordionComponent ],
      imports: [FormsModule],
      providers: [{ provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTripAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Angular has already tested how their mat-expansion components work
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('addTripOption should be called on click', () => {
    spyOn(component, 'addTripOption');
    const buttons = fixture.debugElement.nativeElement.querySelectorAll('button');
    const button = buttons[buttons.length - 1]; // Make sure done is the last element
    button.click();
    fixture.detectChanges();
    expect(component.addTripOption).toHaveBeenCalled();
  });

});





