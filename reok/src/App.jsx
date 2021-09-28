import Index from "pages/Index";
import Login from "pages/Login";
import Products from "pages/Products";
import Sales from "pages/Sales";
import Users from "pages/Users";
import Vendors from "pages/Vendors";
import Layout from "Layouts/Layout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Login">
              <Login />
            </Route>
            <Layout>
            <Route path="/Products">
              <Products />
            </Route>
            <Route path="/Sales">
              <Sales />
            </Route>
            <Route path="/Users">
              <Users />
            </Route>
            <Route path="/Vendors">
              <Vendors />
            </Route>
            <Route path="/">
              <Index />
            </Route>
            </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
