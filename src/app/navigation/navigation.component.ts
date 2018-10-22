import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NavigationEnd, Router } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {

  @ViewChild('drawer') drawer: MatSidenav;

  public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    this.closeDrawerOnRouteChange();
  }

  /**
   * https://stackoverflow.com/questions/46935712/how-can-i-close-material-sidenav-by-clicking-on-an-element-which-has-the-routerl
   *
   * Closes the drawer when route changes.
   */
  private closeDrawerOnRouteChange(): void {
    this.router.events.pipe(
      filter((a, b) => b && a instanceof NavigationEnd)
    ).subscribe(_ => this.drawer.close());
  }
}
