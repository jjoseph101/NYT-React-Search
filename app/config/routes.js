// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include Route component
var Route = router.Route;
var Router = router.Router;

// hashHistory to handle routing client side w/o server
var hashHistory = router.hashHistory;

// IIndexRoute
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/Main");
var Child1 = require("../components/children/Child1");
var GrandChild1 = require("../components/children/grandchildren/GrandChild1");

// Export the Routes
module.exports = (

  //Router component
  <Router history={hashHistory}>

    <Route path="/" component={Main}>

      {/* If selects Child1 then appropriate component*/}
      <Route path="Child1" component={Child1} >

        {/* Child1's Grandchildren options */}
        <Route path="GrandChild1" component={GrandChild1} />

        <IndexRoute component={GrandChild1} />

      </Route>

      {/* Home route if user selects any other path...*/}
      <IndexRoute component={Child1} />

    </Route>
  </Router>
);
