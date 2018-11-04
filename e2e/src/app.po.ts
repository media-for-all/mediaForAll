import {browser, by, element, protractor, $} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    browser.waitForAngularEnabled();
    browser.wait(protractor.ExpectedConditions.visibilityOf($('#get-started')), 20000);
    return element(by.css('h5')).getText();
  }
}
