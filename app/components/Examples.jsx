var React = require("react");
var {Link} = require("react-router");

var Examples = (props => {
    return (
      <div>
        <h1 className="text-center page-title">Examples</h1>
        <p>Here are a few examples you can try out!!</p>
        <ol>
          <li><Link to="/?parCity=Philadelphia">Philadelphia</Link></li>
          <li><Link to="/?parCity=Lamego">Lamego</Link></li>
          <li><Link to="/?parCity=Lisboa">Lisboa</Link></li>
        </ol>
      </div>
    );
});
module.exports = Examples;
