import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should show login button without userId', () => {
    // Check for login button
    let loginButton = de.query(By.css('button'))
    expect(loginButton.nativeElement.innerText).toBe('Log in');

    // Should make this better by querying for app-header-burger component explicitly...
    component.userId = 1;
    fixture.detectChanges();
    loginButton = de.query(By.css('button'))
    expect(loginButton).toBeFalsy();
  });

});
