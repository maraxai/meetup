import React from 'react';
import { shallow, mount } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import App from '../App';
import axios from 'axios';
import { mockEvents } from '../mock-events';

describe('<EventList />, component', () => {
  test('render correct number of events', () => {
    const EventListWrapper = shallow(<EventList events={mockEvents.events} />);
    expect(EventListWrapper.find(Event)).toHaveLength(19);
  });

  test('render correct list of events', () => {
    const AppWrapper = mount(<App />);
    AppWrapper.setState({ events: mockEvents.events });
    expect(AppWrapper.find('.ul-eventlist')).toHaveLength(1);
    AppWrapper.unmount();
  });
});
