import { NgRefresherPage } from './app.po';

describe('ng-refresher App', function() {
  let page: NgRefresherPage;

  beforeEach(() => {
    page = new NgRefresherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
