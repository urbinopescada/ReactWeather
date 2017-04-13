var React = require("react");

module.exports = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    var city = this.refs.txtCity.value;
    if (city){
      this.refs.txtCity.value = "";
      this.props.onSearch(city);
    }
  },
  render: function () {
    return (
        <form  onSubmit={this.onFormSubmit}>
          <div><input ref="txtCity" type="text" placeholder="Enter city name"></input></div>
          <div><button className="button hollow expanded">Get weather</button></div>
        </form>
    );
  }
});
