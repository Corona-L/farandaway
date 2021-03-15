import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LandingPageComponent } from './landing-page.component';

// import { Location } from '@angular/common';
// import { SpyLocation } from '@angular/common/testing';


describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageComponent ],
      // providers: [{ provide: Location, useClass: SpyLocation }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a button `get started`', () => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.innerText).toContain('Get started');
  });

  it('should include an h1 header', () => {
    const h1 = fixture.debugElement.query(By.css('h1'));
    expect(h1).toBeTruthy();
    expect(h1.nativeElement.innerText).toBe('Go anywhere at the click of a button');
  });

  // it('button should navigate to login page', () => {
  //   // const location: Location = TestBed.get(Location);
  //   // expect(location.href).toContain('login');
  //   console.log('location: ', SpyLocation.prototype.path);
  //   // expect(location.path()).toBe('/login');
  // });





});

