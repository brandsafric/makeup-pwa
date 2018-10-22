import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { MatButtonToggleModule } from '@angular/material';
import { ThemeChangerComponent } from './theme-changer.component';
import { ThemeChangeService } from '../services/theme-change.service';
import { CustomTheme } from '../../theme-definitions';

describe('ThemeChangerComponent', () => {
  let component: ThemeChangerComponent;
  let fixture: ComponentFixture<ThemeChangerComponent>;
  let themeService: ThemeChangeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatButtonToggleModule ],
      declarations: [ ThemeChangerComponent ],
      providers: [ ThemeChangeService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(inject([ThemeChangeService], (inThemeService) => {
    themeService = inThemeService;
  }));

  it('should create theme changer component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialise with default light theme selected', () => {
    const expectedTheme: CustomTheme = { id: 'LIGHT_THEME', displayName: 'Light Theme', css: 'custom-light-theme' };

    component.selectedTheme.subscribe(theme => {
      expect(theme.id).toEqual(expectedTheme.id);
      expect(theme.displayName).toEqual(expectedTheme.displayName);
      expect(theme.css).toEqual(expectedTheme.css);
    });
  });

  it('should change to dark theme when new one is selected', () => {
    const darkTheme: CustomTheme = { id: 'DARK_THEME', displayName: 'Dark Theme', css: 'custom-dark-theme' };
    const setNewThemeSpy = spyOn(themeService, 'setNewTheme').and.callThrough();

    component.changeTheme(darkTheme);

    expect(setNewThemeSpy).toHaveBeenCalledWith(darkTheme);

    component.selectedTheme.subscribe(theme => {
      expect(theme.id).toEqual(darkTheme.id);
      expect(theme.displayName).toEqual(darkTheme.displayName);
      expect(theme.css).toEqual(darkTheme.css);
    });
  });
});
