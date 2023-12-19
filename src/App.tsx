import { useState } from "react";
import { modules } from "./modules";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <h1>Routes</h1>
              {modules.map((module) => (
                <div key={module.routes[0].path}>
                  <a href={module.routes[0].path}>{module.routes[0].path}</a>
                </div>
              ))}
            </div>
          }
        />
        {modules.map((module) => (
          <Route
            key={module.routes[0].path}
            path={module.routes[0].path}
            component={module.component}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
