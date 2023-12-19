import { useState } from "react";
import { modules } from "./modules";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return <div>{JSON.stringify(modules, null, 2)}</div>;
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
