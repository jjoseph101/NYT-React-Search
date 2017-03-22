// Include React
var React = require("react");

var Child1 = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Article</h3>
            </div>
            <div className="panel-body">

              <p>
                <a href="#/Child1/GrandChild1" className="btn btn-warning btn-sm">Save Article></a>
              </p>

              {/* This code will allow us to automatically dump the correct GrandChild component */}
              {this.props.children}
            </div>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = Child1;
