import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numOfEventsListed: 32
  }

  handleValueChanged = (event) => {
    const value = event.target.value;
    this.setState({ numOfEventsListed: value });
  }

  render() {
    return (
      <div className="eventlist">
        <span>Show </span>
        <input
          type="number"
          className="numOfEventsListed"
          value={this.state.numOfEventsListed}
          onChange={this.handleValueChanged}
        />
        <span> Events</span>
      </div>
    )
  }
}

export default NumberOfEvents;
