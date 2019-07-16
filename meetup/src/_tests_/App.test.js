import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import Event from '../Event';
import NumberOfEvents from '../NumberOfEvents';
import { mockEvents } from '../mock-events';

describe('<App /> component', () => {
  let AppWrapper;
  // use beforeAll() to avoid code repetion, before every expect() this line of code is executed
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('render Event', () => {
    expect(AppWrapper.find(Event)).toHaveLength(1);
  });

  test('render NumberOfEvents', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });

  test('get list of events after user selects a city', async () => {
    const AppWrapper = mount(<App />);
    AppWrapper.instance().updateEvents = jest.fn();
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    CitySearchWrapper.instance().handleItemClicked('value');
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
  });
});
