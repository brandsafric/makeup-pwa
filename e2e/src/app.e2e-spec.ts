import { AppPage } from './app.po';

describe('Jana Jurakova Makeup App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display page title message', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toEqual('Jana Jurakova Makeup Artist');
  });
});
