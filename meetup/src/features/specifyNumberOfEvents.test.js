import React from 'react';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

import { loadFeature, defineFeature } from 'jest-cucumber';
import { shallow, mount } from 'enzyme';
import { mockEvents } from '../mock-events';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('User hasn\'t specified a number, the default number is 32', ({ given, when, then }) => {

    let AppWrapper;
    given('the user has not changed the default number of events in the list', () => {
      AppWrapper = mount(<App />);
      expect(AppWrapper.find('.events').length).toBe(19);
    });

    when('the user opens the app', () => {
      AppWrapper = mount(<App />)
    });

    then('32 events will show in the list of events', () => {
      expect(AppWrapper.find('.events')).toHave(32);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {

    let NumberOfEventsWrapper;
    given('user has changed the default number of events showing in the list', () => {
      expect(NumberOfEventsWrapper.state('numOfEventsListed')).toBe(10);
    });

    let AppWrapper;
    when('the user opens the app', () => {
        AppWrapper = mount(<App />)
    });

    then('the list of events will show the number of events that the user has set before', () => {
      AppWrapper.find('.numOfEventsListed').toEqual(10);
    });
  });
});
