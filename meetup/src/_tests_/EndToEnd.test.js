import puppeteer from 'puppeteer';
import { mockEvents } from '../mock-events';

describe('show/hide an event details', () => {
  beforeAll(async () => {
      const browser = await puppeteer.launch({ headless: false, sloMo: 300 });
      const page = await browser.newPage();
      await page.goto('http://localhost:3000');
      await page.waitForSelector('.events');
      if (window.location.href.startsWith('http://localhost')) {
        return mockEvents.events;
      }
    })

    let page;
    test('an event is collapsed by default', async () => {
      const extra = await page.$('.events .extra');
      expect(extra).toBeNull();
  });
  let browser;
  browser.close();
});
