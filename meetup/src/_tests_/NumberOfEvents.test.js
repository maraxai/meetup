import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents />, component', () => {
  let NumberOfEventsWrapper;

  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents numOfEventsListed={() => {}} />);
  });

  test('render number input', () => {
    expect(NumberOfEventsWrapper.find('.eventlist')).toHaveLength(1);
  });

  test('default number of events listed is 32', () => {
    expect(NumberOfEventsWrapper.state('numOfEventsListed')).toBe(32);
  });

  test('render textbox for number of events', () => {
    expect(NumberOfEventsWrapper.find('.numOfEventsListed'));
  });

  test('render state as number correctly', () => {
    const numOfEvents = NumberOfEventsWrapper.state('numOfEventsListed');
    expect(NumberOfEventsWrapper.find('.numOfEventsListed').prop('value')).toBe(numOfEvents);
  });

  test('textbox render is of type "number"', () => {
    const textBoxEntry = NumberOfEventsWrapper.find('.numOfEventsListed').prop('value');
    expect(typeof textBoxEntry).toMatch('number');
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
