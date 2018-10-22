const defaultThemeName = 'LIGHT_THEME';

export interface CustomTheme {
  id: string;
  displayName: string;
  css: string;
}

export const CustomThemes: CustomTheme[] = [
  { id: 'LIGHT_THEME', displayName: 'Light Theme', css: 'custom-light-theme' },
  { id: 'DARK_THEME', displayName: 'Dark Theme', css: 'custom-dark-theme' }
];

export const DefaultTheme = CustomThemes.find(customTheme => customTheme.id === defaultThemeName);
