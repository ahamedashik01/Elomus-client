import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './contexts/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Explore from './Pages/Explore/Explore';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import BuyNow from './Pages/BuyNow/BuyNow';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route exact path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/product/:id">
              <ProductDetails></ProductDetails>
            </Route>
            <Route path="/buynow/:id">
              <BuyNow></BuyNow>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">

            </Route>
          </Switch>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
