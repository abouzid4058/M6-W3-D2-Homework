import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Media image URLs from medialist.txt
const NETFLIX_URL = "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg";
const HBO_URL     = "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg";
const HULU_URL    = "https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg";
const PRIME_URL   = "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png";

export default function App() {
  return (
    <Router>
      <div className="container mt-4 border p-4">
        <p className="text-muted">TV APPS</p>

        {/* Navigation links — each passes the app name as a route param */}
        <Link to="/netflix">
          <img src={NETFLIX_URL} className="nf" alt="Netflix" />
        </Link>
        <Link to="/hbomax">
          <img src={HBO_URL} className="hb" alt="HBO Max" />
        </Link>
        <Link to="/hulu">
          <img src={HULU_URL} className="hu" alt="Hulu" />
        </Link>
        <Link to="/primevideo">
          <img src={PRIME_URL} className="pr" alt="Prime Video" />
        </Link>

        {/* Route with :id param — renders Child when any name is clicked */}
        <Switch>
          <Route path="/:id" children={<Child />} />
        </Switch>
      </div>
    </Router>
  );
}

function Child() {
  // useParams reads the :id from the URL — the missing key script
  const { id } = useParams();

  return (
    <div>
      <h3>You Selected: <span>{id}</span></h3>
    </div>
  );
}
