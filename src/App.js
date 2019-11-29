import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { toast } from 'react-toastify';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import SingleProductDetailsPage from './pages/SingleProductDetailsPage';
import NotFound from './pages/NotFound';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {
  toast.configure({
    autoClose: 2000,
    draggable: false,
  });
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/catalog" component={Catalog} exact={true} />
        <Route path="/product/:id" component={SingleProductDetailsPage} exact={true} />
        <Route path="*" component={NotFound} exact={true} />
      </Switch>
    </Router>
  );
}

export default App;
