import "./App.css";
import Login from "./screens/Login";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
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
      <div className="mx-auto" style={{ maxWidth: "1500px" }}>
        <Switch>
          {/* main */}

          {/* auth */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />

          {/* cars booking */}
          <Route exact path="/cars" component={Cars} />
          <Route path="/cars/detail/:id" component={CarsDetails} />
          <Route path="/my-bookings" component={MyBookings} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
