var React = require("react");
/*
var About = React.createClass({
  render: function () {
    return (
        <h3>About component</h3>
    );
  }
});
*/
// simplified sintax for stateless components
var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>Hello, my name is Urbino and I've build this ...</p>

            <p>This are some of the tools used:</p>
            <ul>
              <li><a href="https://facebook.github.io/react">React</a></li>
              <li><a href="http://openweathermap.org">Open Weather Map</a> - to look for temperatue at a given city.</li>
            </ul>
          </div>
    )
};
module.exports = About;
