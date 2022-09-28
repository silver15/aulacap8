import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Users from "./User";
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
           <Users />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
