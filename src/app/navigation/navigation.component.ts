import { Component, ElementRef, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public openMobileMenu = false;
  public isMobile: boolean;
  private menuItems: ElementRef[];

  private static setActiveLink(element: Element): void {
    element.classList.add('active');
  }

  constructor(private elRef: ElementRef, public breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 500px)'])
      .subscribe((state: BreakpointState) => {
        this.isMobile = !state.matches;
        this.menuItems = this.elRef.nativeElement.querySelectorAll('.menu-item');
      });
  }

  public handleMenuClick(clickEvent: MouseEvent): void {
    this.toggleMenu();
    this.clearActiveLink();
    NavigationComponent.setActiveLink((clickEvent.target as Element));
  }

  public toggleMenu(): void {
    if (this.isMobile) {
      this.openMobileMenu = !this.openMobileMenu;
    }
  }

  private clearActiveLink(): void {
    this.menuItems.forEach((menuItem: any) => {
      menuItem.classList.remove('active');
    });
  }
}
