import { MakeRandomCharactersPage } from './app.po';

describe('make-random-characters App', () => {
  let page: MakeRandomCharactersPage;

  beforeEach(() => {
    page = new MakeRandomCharactersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
