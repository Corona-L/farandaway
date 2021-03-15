import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserDashboardComponent } from './user-dashboard.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


describe('UserDashboardComponent', () => {
  let component: UserDashboardComponent;
  let fixture: ComponentFixture<UserDashboardComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashboardComponent ],
      imports: [HttpClientModule, RouterTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    component.user = {emailAddress: 'corona', firstName: 'corona', lastName: 'corona', password: '123'};
    fixture.detectChanges();
  });

  it('should include a h1 header', () => {
    const h1 = fixture.debugElement.query(By.css('h1'));
    expect(h1).toBeTruthy();
    expect(h1.nativeElement.innerText).toContain('Hello');
  });


  it('should have a p tag that greets user', () => {
    const p = de.query(By.css('p'));
    expect(p).toBeTruthy();
    expect(p.nativeElement.innerText).toContain('Keep up to date');
  });

  it('should show a button `Create trip`', () => {
    const button = de.query(By.css('button'));
    expect(button.nativeElement.innerText).toContain('Create trip');
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
