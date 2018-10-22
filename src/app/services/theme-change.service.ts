import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CustomTheme, CustomThemes, DefaultTheme } from '../../theme-definitions';

@Injectable({
  providedIn: 'root'
})
export class ThemeChangeService {

  private selectedTheme = new BehaviorSubject<CustomTheme>(DefaultTheme);

  private static removeAllThemes(): void {
    CustomThemes.forEach(customTheme => document.body.classList.remove(customTheme.css));
  }

  private static setThemeCssClass(theme: CustomTheme): void {
    document.body.classList.add(theme.css);
  }

  private static isThemeValid(theme: CustomTheme): boolean {
    return !!CustomThemes.find(customTheme => customTheme.id === theme.id);


  }

  private static changeTheme(newTheme: CustomTheme): void {
    ThemeChangeService.removeAllThemes();
    ThemeChangeService.setThemeCssClass(newTheme);
  }

  constructor(private overlayContainer: OverlayContainer) {
    this.addThemesToOverlay();
    this.subscribeToThemeChanges();
  }

  /**
   * Get the currently selected theme
   *
   * @returns the selected theme as an Observable
   */
  public getSelectedTheme(): Observable<CustomTheme> {
    return this.selectedTheme;
  }

  /**
   * Sets a new custom theme.
   *
   * @param newTheme the new theme
   */
  public setNewTheme(newTheme: CustomTheme): void {
    if (!ThemeChangeService.isThemeValid(newTheme)) {
      throw new Error('Error theme invalid: ' + JSON.stringify(newTheme));
    }

    this.selectedTheme.next(newTheme);
  }

  private addThemesToOverlay(): void {
    CustomThemes.forEach(customTheme =>  this.overlayContainer.getContainerElement().classList.add(customTheme.css));
  }

  private subscribeToThemeChanges(): void {
    this.selectedTheme.subscribe((newTheme: CustomTheme) => {
      ThemeChangeService.changeTheme(newTheme);
    });
  }
}
