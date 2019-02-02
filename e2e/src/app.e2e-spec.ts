import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('Makeup App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  describe('Navigation', () => {
    it('should contain menu items', () => {
      AppPage.navigateTo();
      expect(AppPage.getMenuItems().count()).toBe(7);
    });

    it('should navigate to the home page', () => {
      const expectUrlString = 'home';

      AppPage.navigateToPage('home').then(() => {
        browser.getCurrentUrl().then(actualUrl =>  {
          expect(actualUrl.indexOf(expectUrlString) !== -1).toBeTruthy();
        });
      });
    });
  });
});
