import { browser, by, element } from 'protractor';

export enum MenuItems {
  Home, Gallery, Contact
}

export class AppPage {
  static navigateTo() {
    return browser.get('/');
  }

  static navigateToPage(pageUrl: string) {
    return browser.get('/' + pageUrl);
  }

  static getPageTitle() {
    return element(by.css('app-navigation h1')).getText();
  }

  static openMenu(func: Function) {
    return element(by.css('mat-sidenav-content mat-toolbar button')).click().then(func());
  }

  static clickNavItem(itemName: MenuItems, func: Function) {
    let itemIndex = 0;

    switch (itemName) {
      case MenuItems.Home:
        itemIndex = 0;
        break;
      case MenuItems.Gallery:
        itemIndex = 1;
        break;
      case MenuItems.Contact:
        itemIndex = 2;
        break;
      default:
        itemIndex = 0;
    }

    return element.all(by.css('mat-nav-list a')).get(itemIndex).click().then(func());
  }
}
