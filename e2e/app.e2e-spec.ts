import { Calculadorabitcoinv3Page } from './app.po';

describe('calculadorabitcoinv3 App', () => {
  let page: Calculadorabitcoinv3Page;

  beforeEach(() => {
    page = new Calculadorabitcoinv3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
