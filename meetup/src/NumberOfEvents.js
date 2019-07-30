import React, { Component } from 'react';
import { ErrorAlert, OfflineAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numOfEventsListed: 32
  }

  handleValueChanged = (event) => {
    const value = event.target.value;
    this.setState({ numOfEventsListed: value });
    this.props.updateEvents(null, null, value);
    if (value < 1) {
      this.setState({ infoText: 'Always stay positive, even with your numbers.' });
    } else {
      this.setState({ infoText: '' });
    }
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
        <ErrorAlert text={this.state.infoText} />
      </div>
    )
  }
}

export default NumberOfEvents;
