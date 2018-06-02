// import libraries
import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';

// import route component
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import component
import NavigationBar from './components/NavBar';
import PropertyListings from './components/Listings/PropertyListings';
import AddProperty from './components/AddListing/AddProperty';

// import css
import './styles.scss';

render(
  <Router>
    <React.Fragment>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={PropertyListings} />
        <Route path="/post-property" component={AddProperty} />
      </Switch>
    </React.Fragment>
  </Router>
  , document.getElementById('root'),
);
