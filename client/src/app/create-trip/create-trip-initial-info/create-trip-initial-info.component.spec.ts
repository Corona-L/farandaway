import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTripInitialInfoComponent } from './create-trip-initial-info.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CreateTripInitialInfoComponent', () => {
  let component: CreateTripInitialInfoComponent;
  let fixture: ComponentFixture<CreateTripInitialInfoComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTripInitialInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTripInitialInfoComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Render h2 correctly
  it('should render h2 correctly', () => {
    const packYourBags = de.query(By.css('h2'));
    expect(packYourBags.nativeElement.innerText).toContain('Pack your bags!');
  });

  // Render p correctly
  it('should render p tag correctly', () => {
    const p = de.query(By.css('p'));
    expect(p.nativeElement.innerText).toContain('First thing\'s first');
  });

  // Render form and inputs
  it('should render add trip info form', () => {
    const form = de.query(By.css('form'));
    expect(form).toBeTruthy();

    const titleInput = de.query(By.css('input[name=title]'));
    const originInput = de.query(By.css('input[name=origin]'));
    expect(titleInput).toBeTruthy();
    expect(originInput).toBeTruthy();
  });

  // Render get started button
  it('should render get started button', () => {
    const button = de.query(By.css('button'));
    expect(button.nativeElement.innerText).toBe('Get started');
  });

  it('addTripInfo should be called on click', () => {
    spyOn(component, 'addTripInfo');
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', null);
    fixture.detectChanges();
    expect(component.addTripInfo).toHaveBeenCalled();
  });

});
