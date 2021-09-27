import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import Login from './components/Login';
import Home from './components/Home';
import CreateUser from './components/CreateUser';
import ViewUsers from './components/ViewUsers';
import Events from './components/Events';

function App() {
  return (
    <Router>
      <Route path="/" component={Login} exact></Route>
      <Route path="/Home" component={Home} exact></Route>
      <Route path="/AddUser" component={CreateUser} exact></Route>
      <Route path="/Users" component={ViewUsers} exact></Route>
      <Route path="/Events" component={Events} exact></Route>
    </Router>
  );
}

export default App;
