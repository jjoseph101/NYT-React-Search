// Include React
var React = require("react");

var GrandChild1 = React.createClass({
  render: function() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Save NYT Article</h3>
        </div>
        <div className="panel-body">
          Article Saved!
        </div>
      </div>
    );
  }
});

module.exports = GrandChild1;
