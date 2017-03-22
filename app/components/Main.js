// Include React
var React = require("react");

var Main = React.createClass({

  // Render function
  render: function() {

    return (

      <div className="container">
        <div className="jumbotron">
          <h2><strong>NEW YORK TIMES Article Scrubber</strong></h2>
          <p><em>Search for an annotate articles of interest</em></p>
          <hr />
          <p> TOPIC </p>
          <p> START YEAR </p>
          <p> END YEAR </p>
          <hr />
          <p>
            <a href="#/Child1" className="btn btn-primary btn-lg">SEARCH</a>
          </p>
        </div>

        <div className="row">

          {/* Dump correct Child Component */}
          {this.props.children}

        </div>

      </div>
    );
  }
});

// Export for other files
module.exports = Main;
