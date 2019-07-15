import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents />, component', () => {
  let NumberOfEventsWrapper;

  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('default number of events listed is 32', () => {
    expect(NumberOfEventsWrapper.state('numOfEventsListed')).toBe(32);
  });

  test('render textbox for number of events', () => {
    expect(NumberOfEventsWrapper.find('.numOfEventsListed'));
  });

  test('state is rendered in textbox', () => {
    const currentState = NumberOfEventsWrapper.state('numOfEventsListed');
    expect(NumberOfEventsWrapper.find('.numOfEventsListed').prop('value')).toBe(currentState);
  });

  test('textbox render is positive number', () => {
  expect(NumberOfEventsWrapper.find('.numOfEventsListed').prop('value')).toBeGreaterThan(0);
  });

  test('change state when number input changes', () => {
    const entry = { target: { value: 7 } }
    NumberOfEventsWrapper.find('.numOfEventsListed').simulate('change', entry);
    expect(NumberOfEventsWrapper.state('numOfEventsListed')).toBe(7);
  });







})
