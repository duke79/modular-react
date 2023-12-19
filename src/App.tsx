import { Suspense } from "react";
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
        {/* <Route
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
        /> */}
        {modules.map(({ route, component: Component }) => (
          <Route
            key={route.path}
            path={route.path}
            // lazy={module.component}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Component />
              </Suspense>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
