import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../homepage/Home';
import CompanyList from '../companies/CompanyList';
import CompanyDetails from '../companies/CompanyDetails';
import JobList from '../jobs/JobList';
import LoginForm from '../auth/LoginForm';
import SignupForm from '../auth/SignupForm';
import PrivateRoute from './PrivateRoute';
import ProfileForm from "../profiles/ProfileForm";


/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */
const Routes = ( { login, signup }) => {

  return (
    <Switch>

      <Route exact path ="/">
        <Home />
      </Route>
      
      <Route exact path="/login">
        <LoginForm login={login} />
      </Route>

      <Route exact path="/signup">
        <SignupForm signup={signup} />
      </Route>

      <PrivateRoute exact path="/companies">
        <CompanyList />
      </PrivateRoute>

      <PrivateRoute exact path="/jobs">
        <JobList />
      </PrivateRoute>

      <PrivateRoute exact path="/companies/:handle">
        <CompanyDetails />
      </PrivateRoute>

      <PrivateRoute path="/profile">
        <ProfileForm />
      </PrivateRoute>

      <Redirect to ="/" />
    </Switch>
  )
}

export default Routes;