import { Component, OnInit } from '@angular/core';
import { ThemeChangeService } from '../services/theme-change.service';
import { CustomTheme, CustomThemes } from '../../theme-definitions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-theme-changer',
  templateUrl: './theme-changer.component.html',
  styleUrls: ['./theme-changer.component.scss']
})
export class ThemeChangerComponent implements OnInit {

  public customThemes = CustomThemes;
  public selectedTheme: Observable<CustomTheme> = this.themeService.getSelectedTheme();

  constructor(private themeService: ThemeChangeService) { }

  ngOnInit() {}

  public changeTheme(newTheme: CustomTheme): void {
    this.themeService.setNewTheme(newTheme);
  }
}
