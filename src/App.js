import "./App.css";
import Login from "./screens/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import Header from "./components/Header";
import Cars from "./screens/Cars";
import MyBookings from "./screens/MyBookings";
import CarsDetails from "./screens/CarsDetails";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <div className="mx-auto" style={{maxWidth:'1500px'}}>
          {/* main */}
          <Route exact  path="/" component={Home} />

          {/* auth */}
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />

          {/* cars booking */}
          <Route exact path="/cars" component={Cars} />
          <Route path='/cars/detail/:id' component={CarsDetails} />
          <Route path="/my-bookings" component={MyBookings} />

        </div>
      </Switch>
    </Router>
  );
}

export default App;
