import React, { Component } from 'react';

class Event extends Component {
  state = {
    showDetails: false,
    events: []
  };

  handleClick = () => {
    this.setState({ showDetails: !this.state.showDetails })
  }

  render() {
    const event = this.props.event;
    return (
      <div className="events">
        <p className="event_date-time">{event.local_time} - {event.local_date}</p>
        <p className="event_name">{event.name}</p>
        <p className="group_name">GROUP: {event.group.name}</p>
        <p className="event_rsvp">{event.yes_rsvp_count} people signed up for this meeting</p>
        {this.state.showDetails &&
        <div className="eventDetails">
          <p className="address">
            <span>{event.venue.name},</span>
            <span>{event.venue.address_1},</span>
            <span>{event.venue.address_2},</span>
            <span>{event.venue.address_3},</span>
            <span>{event.venue.city},</span>
            <span>{event.venue.localized_country_name}</span>
          </p>
          <div>
            <div className="description" dangerouslySetInnerHTML={{ __html: event.description }} />
            <p className="visibility">{event.visibility}</p>
            <a className="link" href={event.link}>Event Link</a>
          </div>
        </div>
        }
        <button className="detail-btn" onClick={this.handleClick}>more Details</button>
      </div>
    )
  }
}

export default Event;
