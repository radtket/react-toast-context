import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { REMOVE_ALL } from "./contexts/types";
import Home from "./toasts/Home";
import Info from "./toasts/Info";
import Danger from "./toasts/Danger";
import CutomHTML from "./toasts/CutomHTML";
import useToastContext from "./hooks/useToastContext";

const App = () => {
  const { toast, toastDispatch } = useToastContext();
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/info">Info</Link>
          </li>
          <li>
            <Link to="/danger">Danger</Link>
          </li>
          <li>
            <Link to="/custom-html">Custom HTML</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/info">
            <Info />
          </Route>
          <Route exact path="/danger">
            <Danger />
          </Route>
          <Route exact path="/custom-html">
            <CutomHTML />
          </Route>
        </Switch>
      </Router>
      <br />
      {toast.length && (
        <button
          onClick={() =>
            toastDispatch({
              type: REMOVE_ALL,
            })
          }
          type="button"
        >
          Clear all notifications
        </button>
      )}
    </div>
  );
};

export default App;
