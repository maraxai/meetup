import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event />, component', () => {
  let EventWrapper;

  beforeAll(() => {
    EventWrapper = shallow(<Event event={
      {
        "created": 1555489012000,
        "duration": 7200000,
        "id": "260693935",
        "name": "Angular Frankfurt #7 - Save the Date",
        "rsvp_limit": 50,
        "date_in_series_pattern": false,
        "status": "upcoming",
        "time": 1565110800000,
        "local_date": "2019-08-06",
        "local_time": "19:00",
        "updated": 1555489012000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 31,
        "venue": {
          "id": 25752150,
          "name": "Rocketloop",
          "lat": 50.13675308227539,
          "lon": 8.668071746826172,
          "repinned": true,
          "address_1": "Hansaallee 154",
          "city": "Frankfurt am Main",
          "country": "de",
          "localized_country_name": "Germany"
        },
        "group": {
          "created": 1513187174000,
          "name": "Angular Frankfurt",
          "id": 26862879,
          "join_mode": "open",
          "lat": 50.119998931884766,
          "lon": 8.680000305175781,
          "urlname": "Angular-Frankfurt",
          "who": "Angular Coder",
          "localized_location": "Frankfurt, Germany",
          "state": "",
          "country": "de",
          "region": "en_US",
          "timezone": "Europe/Berlin"
        },
        "link": "https://www.meetup.com/Angular-Frankfurt/events/260693935/",
        "description": "<p>Save the Date - Angular Frankfurt #7</p> <p>After a brief hiatus, we are back with Angular Frankfurt #7, which will take place on August 6th. As the date moves closer, we will be announcing more details and the topic of the meetup.</p> <p>If you have not yet filled out our member survey, please take the time to do so, so we can adjust the coming meetups to your expectations: </p> <p>We are  always looking for speakers, so if any of you are interested, feel free to contact the organizers!</p> ",
        "how_to_find_us": "Entrance is directly on Hansaallee, it's the big brick building",
        "visibility": "public"
      }
    }/>);
  });

  test('render list of events', () => {
    expect(EventWrapper.find('.event-list')).toHaveLength(1);
  });

  test('render event data', () => {
    EventWrapper.find('.event-list li');
    expect(EventWrapper.state('showDetails')).toBe(false);
  });

  test('render event time', () => {
    const events = EventWrapper.state('events');
    expect(EventWrapper.find('.local_time')).toBe("19:00");
  });

  test('render event date', () => {
    const events = EventWrapper.state('events');
    expect(EventWrapper.find('.local_date')).toBe(events[0].local_date);
  });

  test('render group name', () => {
    const events = EventWrapper.state('events');
    expect(EventWrapper.find('.group_name')).toBe(events[0].group.name);
  });

  test('render group name', () => {
    const events = EventWrapper.state('events');
    expect(EventWrapper.find('.event_rsvp')).toBe(events[0].yes_rsvp_count);
  });
})
