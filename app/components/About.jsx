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
            <h3>About</h3>
            <p>Welcome to the about page!</p>
        </div>
    )
};
module.exports = About;
