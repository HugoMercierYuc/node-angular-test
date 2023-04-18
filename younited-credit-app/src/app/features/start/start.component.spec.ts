import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StartComponent } from './start.component';

describe('StartComponent', () => {
  let component: StartComponent;
  let fixture: ComponentFixture<StartComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StartComponent,
        RouterTestingModule.withRoutes([
          {
            path: 'features/email',
            component: StartComponent,
          },
        ]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to email', () => {
    const navigateSpy = jest.spyOn(router, 'navigate');

    fixture.debugElement
      .query(By.css('[data-test="continue"]'))
      .nativeElement.click();

    expect(navigateSpy).toHaveBeenCalledWith(['/features/email']);
  });
});
