import { UwaBadgePage } from './app.po';

describe('uwa-badge App', () => {
  let page: UwaBadgePage;

  beforeEach(() => {
    page = new UwaBadgePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
