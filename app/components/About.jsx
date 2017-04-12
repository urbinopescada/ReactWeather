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
    <h3>About component</h3>
  )
};
module.exports = About;
