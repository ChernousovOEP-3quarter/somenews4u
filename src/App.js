import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles.css";
import Anl from "./bodies/anl";
import Wrld from "./bodies/wrld";
import Conn from "./bodies/conn";
import Sprt from "./bodies/sprt";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="headfoot">
          <button>
            <Link to="/analitics" className="swtch">
              Аналитика
            </Link>
          </button>
          <button>
            <Link to="/world" className="swtch">
              В мире
            </Link>
          </button>
          <button>
            <Link to="/connection" className="swtch">
              Связь
            </Link>
          </button>
          <button>
            <Link to="/sport" className="swtch">
              Спорт
            </Link>
          </button>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/connection">
            <Conn />
          </Route>
          <Route path="/world">
            <Wrld />
          </Route>
          <Route path="/analitics">
            <Anl />
          </Route>
          <Route path="/sport">
            <Sprt />
          </Route>
        </Switch>
        <div className="headfoot">
          <h5> Автор: Черноусов Никита </h5>
          <a href="#" title="Вернуться в начало" class="topbutton">
            {" "}
            Наверх{" "}
          </a>
        </div>
      </div>
    </Router>
  );
}
