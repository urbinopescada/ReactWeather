var React = require("react");
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

var Weather = React.createClass({

  getInitialState: function () {
    return {
      isLoading: false
    };
  },

  handleSearch: function (city) {
     var self = this;

     self.setState({isLoading: true});

     openWeatherMap.getTemp(city).then(function (temp) {
                self.setState({isLoading: false, location: city, temp: temp});
            },
            function (err) {
               self.setState({isLoading: false});
               alert(err);
            });
  },

  //TESTE COMMENT
  render: function () {
    var {isLoading, location,temp} = this.state;
    function renderMessage () {
        if (isLoading) {
          return <p className="text-center">Feetching weather...</p>
        }
        else if (temp && location) {
          return <WeatherMessage location={location} temp={temp}/>
        }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});
module.exports = Weather;
