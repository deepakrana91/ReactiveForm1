import { Assin1form2Page } from './app.po';

describe('assin1form2 App', () => {
  let page: Assin1form2Page;

  beforeEach(() => {
    page = new Assin1form2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
