var React = require("react");
var ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: "Error"
    }
  },
  propTypes: function () {
    return {
      title: React.propTypes.string,
      message: React.propTypes.string.isRequired
    }
  },
  componentDidMount: function () {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    var {title, message} = this.props;
    return (
      <div id="error-modal" className="reveal tiny text-center" data-revel="">
          <h4>{title}</h4>
          <p>{message}</p>
          <p>
            <button className="button hollow" data-close="">
              ok
            </button>
          </p>
      </div>
    );
  }
});
module.exports = ErrorModal;
