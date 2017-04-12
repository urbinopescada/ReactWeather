var React = require("react");

var WeatherMessage = (props) => {
    var {location,temp} = props;
    return (
        <p>Em {location} estão {temp}º.</p>
    );
};
module.exports = WeatherMessage;
