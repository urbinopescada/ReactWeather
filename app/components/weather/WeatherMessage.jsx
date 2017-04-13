var React = require("react");

var WeatherMessage = (props) => {
    var {location,temp} = props;
    return (
        <p className="text-center">In <strong>{location}</strong> the temperature is <strong>{temp}º</strong>.</p>
    );
};
module.exports = WeatherMessage;
