import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
// carbon-components-angular default imports
import { UIShellModule, IconModule } from 'carbon-components-angular';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
