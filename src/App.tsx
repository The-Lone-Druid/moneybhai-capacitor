import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routesList } from "./screens/routes";

function App() {
  return (
    <div className="App font-inter">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/onboarding"} />} />
          <Route path={routesList.onboarding.name}>
            <Route
              index
              element={<routesList.onboarding.welcome.component />}
            />
          </Route>
          <Route path={routesList.auth.name}>
            <Route index element={<Navigate to={"/login"} />} />
            <Route
              path={routesList.auth.login.name}
              element={<routesList.auth.login.component />}
            />
            <Route
              path={routesList.auth.signup.name}
              element={<routesList.auth.signup.component />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
