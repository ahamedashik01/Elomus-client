import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Switch>
            <Route exact path="/">

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
