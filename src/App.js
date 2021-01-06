import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./config/firebase";
import { useStateValue } from "./config/StateProvider";

// components //
import Header from "./components/Header";
import Footer from "./components/Footer";
//pages //
import Home from "./pages/Home";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      //console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login /> {/* Login Component */}
          </Route>
          <Route path="/checkout">
            <Header /> {/* Header Component */}
            <Payment /> {/* Checkout Component */}
          </Route>
          <Route path="/cart">
            <Header /> {/* Header Component */}
            <Checkout /> {/* Checkout Component */}
          </Route>
          <Route path="/">
            <Header /> {/* Header Component */}
            <Home /> {/* Home Component */}
            <Footer /> {/* Footer Component */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
