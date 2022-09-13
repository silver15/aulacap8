import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Catalog from 'pages/catalog';
import Admin from 'Admin';
import ProductDetails from 'pages/ProductDetails';
import Auth from 'Admin/Auth';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/products" exact>
        <Catalog />
      </Route>
      <Route path="/products/:productId">
        <ProductDetails />
      </Route>
      <Redirect from="/admin/auth" to="/admin/auth/login" exact />
      <Route path="/admin/auth">
        <Auth />
      </Route>
      <Redirect from="/admin" to="/admin/products" exact />
      <Route path="/admin">
        <Admin />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
