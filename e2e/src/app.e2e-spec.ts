import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('text should equal "MEDIA FOR ALL"', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('MEDIA FOR ALL');
  });
});
