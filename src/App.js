import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import routes from './routes'
import {store} from './redux/index'

function App() {
  
    store.dispatch({
      type: "LOGIN_FAILED"
    })
    
    if(localStorage.keyToken !== undefined){
      store.dispatch({
        type: "LOGIN_SUCCESS"
      })
    }

  return (
    <Router>
      <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
    </Router>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default App;
