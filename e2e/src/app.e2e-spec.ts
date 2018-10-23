import {AppPage, MenuItems} from './app.po';
import { browser } from 'protractor';

describe('Jana Jurakova Makeup App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display page title message', () => {
    AppPage.navigateTo();
    expect(AppPage.getPageTitle()).toEqual('Jana Jurakova Makeup Artist');
  });

  it('should navigate to the gallery main page', () => {
    const expectUrlString = 'gallery-main';
    const menuItemName = MenuItems.Gallery;

    AppPage.navigateTo();
    testMenuItem(expectUrlString, menuItemName);
  });

  it('should navigate to the home page', () => {
    const expectUrlString = 'home';
    const menuItemName = MenuItems.Home;

    AppPage.navigateToPage('contact');
    testMenuItem(expectUrlString, menuItemName);
  });

  it('should navigate to the contact page', () => {
    const expectUrlString = 'contact';
    const menuItemName = MenuItems.Contact;

    AppPage.navigateTo();
    testMenuItem(expectUrlString, menuItemName);
  });
});

/**
 * Opens the menu side navigation
 * Clicks on the item corresponding to {menuItem}
 * Checks the URL has contains the expected {expectedUrlString}
 *
 * @param expectUrlString the expect string to locate in the URL
 * @param menuItem the menu item to click on
 */
function testMenuItem(expectUrlString: string, menuItem: MenuItems): void {
  AppPage.openMenu(() => {
    AppPage.clickNavItem(menuItem, () => {
      browser.getCurrentUrl().then(actualUrl =>  {
        expect(actualUrl.indexOf(expectUrlString) !== -1).toBeTruthy();
      });
    });
  });
}
