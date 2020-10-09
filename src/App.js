import React from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import * as ROUTES from './constants/routes';
import { Browse, Home, Signin, Signup, BrowseYoutube } from './pages';
import { useAuthListener } from './hooks';

function App() {
  const { user } = useAuthListener();

  return (
    <div className="App">
      <Router>
        <Switch>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_IN}
          >
            <Signin />
          </IsUserRedirect>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_UP}
          >
            <Signup />
          </IsUserRedirect>

          <ProtectedRoute user={user} path={ROUTES.YOUTUBE}>
            <BrowseYoutube />
          </ProtectedRoute>
          <ProtectedRoute user={user} path={ROUTES.BROWSE}>
            <Browse />
          </ProtectedRoute>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.HOME}
            exact
          >
            <Home />
          </IsUserRedirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
