import { TestBed } from '@angular/core/testing';
import { ThemeChangeService } from './theme-change.service';
import { CustomTheme } from '../../theme-definitions';

describe('ThemeChangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemeChangeService = TestBed.get(ThemeChangeService);
    expect(service).toBeTruthy();
  });

  it('should initialise with default light theme selected', () => {
    const service: ThemeChangeService = TestBed.get(ThemeChangeService);
    const expectedTheme: CustomTheme = { id: 'LIGHT_THEME', displayName: 'Light Theme', css: 'custom-light-theme' };

    service.getSelectedTheme().subscribe(theme => {
      expect(theme.id).toEqual(expectedTheme.id);
      expect(theme.displayName).toEqual(expectedTheme.displayName);
      expect(theme.css).toEqual(expectedTheme.css);
    });
  });

  it('should set dark valid theme', () => {
    const service: ThemeChangeService = TestBed.get(ThemeChangeService);
    const darkTheme: CustomTheme = { id: 'DARK_THEME', displayName: 'Dark Theme', css: 'custom-dark-theme'};

    service.setNewTheme(darkTheme);

    service.getSelectedTheme().subscribe(theme => {
      expect(theme.id).toEqual(darkTheme.id);
      expect(theme.displayName).toEqual(darkTheme.displayName);
      expect(theme.css).toEqual(darkTheme.css);
    });
  });

  it('should be throw error when setting invalid theme', () => {
    const service: ThemeChangeService = TestBed.get(ThemeChangeService);
    const customTheme: CustomTheme = { id: 'CUSTOM_THEME', displayName: 'Custom Theme', css: 'custom-theme'};

    expect(function() { service.setNewTheme(customTheme); }).toThrow();
  });
});
