import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import Event from '../Event';
import { shallow, mount } from 'enzyme';
import { mockEvents } from '../mock-events';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('By default, an event is collapsed', ({ given, when, then }) => {
    let AppWrapper;
    given('user hasn’t opened any event', () => {
      expect(AppWrapper).find('.eventDetails').toBeNull();
    });

    when('user opens the app', () => {
      AppWrapper = mount(<App />)
    });

    then('the user should see the collapsed list of events', () => {
      expect(AppWrapper.find('.events')).toHaveLength(1);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    let EventWrapper;
    given('user hasn’t opened any event', () => {
      expect(EventWrapper.find('.eventDetails')).toBeNull();
    });

    when('the user clicks on an event', () => {
      EventWrapper.find('.detail-btn').simulate('click');
      expect(EventWrapper.find('.eventDetails')).toBe(true);
    });

    then('the details of the selected event will show', () => {
      expect(EventWrapper.find('.eventDetails'));
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    let EventWrapper;
    given('an event is opened, the details are shown', () => {
      expect(EventWrapper.find('.eventDetails')).toBe(true);
    });

    when('the user clicks on an event', () => {
      EventWrapper.find('.detail-btn').simulate('click');
    });

    then('the details of the selected event will collapse', () => {
      expect(EventWrapper.find('.eventDetails')).toBe(false);
    });
  });
});
