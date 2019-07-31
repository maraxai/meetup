import React, { Component } from 'react';
import { WarningAlert } from './Alert';
import { getEvents } from './api';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';

class Event extends Component {
  state = {
    showDetails: false,
    events: [],
  };

  handleClick = () => {
    this.setState({ showDetails: !this.state.showDetails });
    const rsvpCount = this.props.event.yes_rsvp_count;
    const rsvpMax = this.props.event.rsvp_limit;
    if (rsvpCount == rsvpMax)  {
      this.setState({ infoText: `This event is completely booked.` })
    } else {
      this.setState({ infoText: '' });
    }
  }

  getData() {
    let reservations = this.props.event.yes_rsvp_count;
    let vacancies = this.props.event.rsvp_limit - this.props.event.yes_rsvp_count;

    return (
      [
        {name: 'reservations', value: reservations },
        {name: 'vacancies', value: vacancies }
      ]
    );
  }

  render() {
    const event = this.props.event;
    let colors = ['red','green'];
    return (
      <div className="events">
        <p className="event_date-time">{event.local_time} - {event.local_date}</p>
        <p className="event_name">{event.name}</p>
        <p className="group_name">GROUP: {event.group.name}</p>
        <p className="event_rsvp">{event.yes_rsvp_count} people signed up for this meeting</p>
        {this.state.showDetails &&
        <div className="eventDetails">
        <ResponsiveContainer height={400}>
          <PieChart width={800} height={400}>
          <Legend verticalAlign="middle" align="left"/>
            <Pie data={this.getData()} cx={200} cy={100} innerRadius={5} outerRadius={80} fill="#8884d8" label>
            {
              this.getData().map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]}/>
              ))
            }
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <WarningAlert text={this.state.infoText} /><br/>
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
