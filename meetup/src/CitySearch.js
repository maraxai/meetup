import React, { Component } from 'react';
import { getSuggestions } from './api';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: []
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ query: value });
    getSuggestions(value).then(suggestions => {
      this.setState({ suggestions });

      if (value && suggestions.length === 0 ) {
        this.setState({ infoText: 'There are no Meetup groups registered for this city. Please try another location.' });
      } else {
        this.setState({ infoText: ''});
      }
    });


  }

  handleItemClicked = (value, lat, lon) => {
    this.setState({ query: value, suggestions: [] });
    this.props.updateEvents(lat, lon);
  }

  render() {
    return (
      <div className="city-search">
        <h2>Find Meetup events in the city of your choice.</h2>
        <p>Enter a city name:</p>
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
        />

        <ul className="suggestions">
          {this.state.suggestions.map(item =>
            <li key={item.name_string} onClick={() => this.handleItemClicked(item.name_string, item.lat, item.lon)}>{item.name_string}</li>
          )}
        </ul>
        <InfoAlert text={this.state.infoText} />
      </div>
    );
  }
}

export default CitySearch;
