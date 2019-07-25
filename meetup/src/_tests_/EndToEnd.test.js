import puppeteer from 'puppeteer';
import { mockEvents } from '../mock-events';

describe('Show/hide an event\'s details', () => {
  let browser;
  let page;
  beforeAll(async () => {
      browser = await puppeteer.launch();
      page = await browser.newPage();
      await page.goto('http://localhost:3000/');
      await page.waitForSelector('.events');
  });

  afterAll(() => {
    browser.close();
  });

  test('an event is collapsed by default', async () => {
    const eventDetails = await page.$('.events .eventDetails');
    expect(eventDetails).toBeNull();
  });

  test('user can expand an event to see its details', async () => {
    const events = await page.$('.events');
    const eventDetails = await page.$('.events .eventDetails');
    expect(events).toHaveLength(19);
    await page.click('.events .detail-btn');
    expect(eventDetails).toBeDefined();
  });

  test('user can collapse an event to hide its details', async () => {
    await page.click('.events .detail-btn');
    const eventDetails = await page.$('.events .eventDetails');
    expect(eventDetails).toBeNull();
  })
});

describe('Filter events by city', () => {
  let browser;
  let page;
  beforeAll(async () => {
      browser = await puppeteer.launch();
      page = await browser.newPage();
      if (window.location.href.startsWith('http://localhost')) {
        return mockEvents.events;
      }
      await page.waitForSelector('.suggestions');
      await page.goto('http://localhost:3000');
  });

  afterAll(() => {
    browser.close();
  });

  test('By default, when user hasn\'t searched for a city, show upcoming events based on the user\'s location.', async () => {
    const events = await page.$('.events');
    expect(events).toBeDefined();
  });


  test('User should see a list of suggestions when they search for a city.', async () => {
    const suggestions = await page.$('.suggestions');
    expect(suggestions).toBeDefined();
  });

  test('User can select a city from the suggested list.', async () => {
    const suggestions = await page.$('.suggestions');
    expect(suggestions).toBeDefined();
    expect('.city').toBeDefined();
  });

});
