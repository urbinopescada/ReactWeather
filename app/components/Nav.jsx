var React = require("react");
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    onSearch: function (e) {
      e.preventDefault();

      var cityToSearch = this.refs.txtSearch.value;
      if (cityToSearch){
        this.refs.txtSearch.value ="";

        var encodedLocation = encodeURIComponent(cityToSearch);
        window.location.hash = "#/?parCity=" + encodedLocation;

        //This doen't work when the weather component is already loaded. So we need componentWillReceiveProps
      }
    },
    componentWillReceiveProps: function (newProps) {
      
    },
    render: function () {
      return (
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">byU's</li>
              <li> <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink> </li>
              <li> <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</IndexLink> </li>
              <li> <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</IndexLink> </li>
            </ul>
          </div>
          <div className="top-bar-right">
              <form onSubmit={this.onSearch}>
                  <ul className="menu">
                    <li><input type="search" ref="txtSearch" placeholder="Search weather by city.."></input></li>
                    <li><input type="submit" className="button" value="Go!"></input></li>

                  </ul>
              </form>
          </div>
        </div>
    );
  }
});

module.exports = Nav;
