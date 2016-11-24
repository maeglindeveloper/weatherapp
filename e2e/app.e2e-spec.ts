import { WeatherapplicationPage } from './app.po';

describe('weatherapplication App', function() {
  let page: WeatherapplicationPage;

  beforeEach(() => {
    page = new WeatherapplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
