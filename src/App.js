import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SingleProductDetailsPage from './pages/SingleProductDetailsPage';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/product/:id" component={SingleProductDetailsPage} exact={true} />
        <Route path="*" component={NotFound} exact={true} />
      </Switch>
    </Router>
  );
}

export default App;
