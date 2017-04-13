var React = require("react");
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

var Weather = React.createClass({

  getInitialState: function () {
    return {
      isLoading: false
    };
  },

  handleSearch: function (city) {
     var self = this;

     self.setState({isLoading: true, lastError: null});

     openWeatherMap.getTemp(city).then(function (temp) {
              self.setState({isLoading: false, location: city, temp: temp},);
            },
            function (err) {
              self.setState({isLoading: false, lastError : err.message});
            });
  },

  //TESTE COMMENT
  render: function () {
    var {isLoading, location,temp, lastError} = this.state;
    function renderMessage () {
        if (isLoading) {
          return <p className="text-center">Feetching weather...</p>
        }
        else if (temp && location) {
          return <WeatherMessage location={location} temp={temp}/>
        }
    }
    function renderError() {
      if (lastError) {
        return <ErrorModal message={lastError}/>
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});
module.exports = Weather;
