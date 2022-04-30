import React from "react";
import Header from "../../components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routeConfig } from "../../Routes/routeConfig";
import styles from "./App.module.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {routeConfig.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
