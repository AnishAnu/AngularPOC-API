import { MyWesitePage } from './app.po';

describe('my-wesite App', function() {
  let page: MyWesitePage;

  beforeEach(() => {
    page = new MyWesitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
