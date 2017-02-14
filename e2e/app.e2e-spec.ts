import { Ag2RouterPage } from './app.po';

describe('ag2-router App', function() {
  let page: Ag2RouterPage;

  beforeEach(() => {
    page = new Ag2RouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
