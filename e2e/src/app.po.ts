import {browser, by, element, ElementArrayFinder} from 'protractor';

export class AppPage {
  static navigateTo() {
    return browser.get('/');
  }

  static navigateToPage(pageUrl: string) {
    return browser.get('/' + pageUrl);
  }

  static getMenuItems(): ElementArrayFinder {
    return element.all(by.css('.menu-item'));
  }
}
