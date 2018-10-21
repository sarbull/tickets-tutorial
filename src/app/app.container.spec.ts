import { TestBed, async } from '@angular/core/testing';
import { AppContainer } from './app.container';
import { CustomCommonModule } from './modules/common';
import { TicketsModule } from './modules/tickets';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CustomCommonModule,
        TicketsModule
      ],
      declarations: [
        AppContainer
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppContainer);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have initial view 'HOME'`, () => {
    const fixture = TestBed.createComponent(AppContainer);
    const app = fixture.debugElement.componentInstance;
    expect(app.state.view).toEqual('HOME');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppContainer);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Tickets Tutorial!');
  });
});
