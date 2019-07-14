import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event />, component', () => {
  let EventWrapper;

  beforeAll(() => {
    EventWrapper = shallow(<Event />);
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
    expect(events[0].local_time).toBe("19:00");
  });

  test('render event date', () => {
    const events = EventWrapper.state('events');
    expect(events[0].local_date).toBe("2019-08-06");
  });

  test('render group name', () => {
    const events = EventWrapper.state('events');
    expect(events[0].group.name).toBe("Angular Frankfurt");
  });

  test('render rsrv count', () => {
    const events = EventWrapper.state('events');
    expect(events[0].yes_rsvp_count).toBe(31);
  });

  test('render detail button', () => {
    expect(EventWrapper.find('.showDetails'));
  });

  test('details', () => {
    const events = EventWrapper.state('showDetails');
    expect(EventWrapper.state('showDetails')).toBe(false);
  });

  test('click on button should change of state for showDetails', () => {
    EventWrapper.find('.showDetails').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  });
})
