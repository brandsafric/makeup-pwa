import { AppPage } from './app.po';
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

  it('should navigate to the home page', () => {
    const expectUrlString = 'home';

    AppPage.navigateToPage('home').then(() => {
      browser.getCurrentUrl().then(actualUrl =>  {
        expect(actualUrl.indexOf(expectUrlString) !== -1).toBeTruthy();
      });
    });
  });
});
