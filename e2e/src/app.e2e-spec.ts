import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('text should include "jobs"', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Jobs');
  });
});
