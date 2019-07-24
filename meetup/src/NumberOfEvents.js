import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numOfEventsListed: 32
  }

  handleValueChanged = (event) => {
    const value = event.target.value;
    this.setState({ numOfEventsListed: value });
    this.props.updateEvents(null, null, value);
  }

  render() {
    return (
      <div className="eventlist">
        <span>Show </span>
        <input
          type="number"
          className="numOfEventsListed"
          onChange={this.handleValueChanged}
          value={this.state.numOfEventsListed}
        />
        <span> Events</span>
      </div>
    )
  }
}

export default NumberOfEvents;
