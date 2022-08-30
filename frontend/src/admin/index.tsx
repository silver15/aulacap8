import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import './styles.css';

const Admin = () => {
  return (
    <div className="admin-container">
     <NavBar />
      <div className="admin-content">
        <Switch>
          <Route path="/admin/products">
            <h1>Product Crud</h1>
          </Route>
          <Route path="/admin/categories">
            <h1>Category Crud</h1>
          </Route>
          <Route path="/admin/users">
            <h1>User Crud</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
