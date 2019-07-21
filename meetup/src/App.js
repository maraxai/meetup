import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
//import Event from './Event';
import NumberOfEvents from './NumberOfEvents';
import { getSuggetions } from './api';
//import { mockEvents } from './mock-events';
import { getEvents } from './api';


class App extends Component {
  state = {
    events: [],
    numOfEventsListed: null
  }

  componentDidMount() {
    this.updateEvents();
  }

  updateEvents = (lat, lon, page) => {
    getEvents(lat, lon, page).then(events => this.setState({ events, lat, lon }));
  }

  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <EventList events={this.state.events}/>
        <NumberOfEvents updateEvents={this.updateEvents}/>
      </div>
    );
  }
}

export default App;
