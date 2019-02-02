import { browser, by, element } from 'protractor';

export class AppPage {
  static navigateTo() {
    return browser.get('/');
  }

  static navigateToPage(pageUrl: string) {
    return browser.get('/' + pageUrl);
  }

  static getPageTitle() {
    return element(by.css('h1')).getText();
  }
}
