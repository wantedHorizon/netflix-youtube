import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import * as ROUTES from './constants/routes';
import { Browse, Home, Signin, Signup } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path={ROUTES.HOME} exact component={Home} />
        <Route path={ROUTES.SIGN_IN} component={Signin} />
        <Route path={ROUTES.BROWSE} component={Browse} />
        <Route path={ROUTES.SIGN_UP} component={Signup} />
      </Router>
    </div>
  );
}

export default App;
