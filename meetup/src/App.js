import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import Event from './Event';
import NumberOfEvents from './NumberOfEvents';
import { getSuggetions } from './api';
import { mockEvents } from './mock-events';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <EventList />
        <Event />
        <NumberOfEvents />
      </div>
    );
  }
}

export default App;
