var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('../api/openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      location: 'Izmir',
      temp: 34,
    }
  },
  handleSearch: function(location) {
    var that = this;
    openWeatherMap.getTemp(location).then(function(temp) {
      console.log('getTemp is successfull, temp: ' + temp);
      that.setState({
        location: location,
        temp: temp,
      });
    }, function(errorMessage) {
      alert(errorMessage);
    });
  },
  render: function() {
    var {temp, location} = this.state;
    return(
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage location={location} temp={temp}/>
      </div>
    );
  }
});

module.exports = Weather;