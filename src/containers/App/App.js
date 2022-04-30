import React from "react";
import Header from "../../components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routeConfig } from "../../Routes/routeConfig";
import styles from "./App.module.css";
import { REPO_NAME } from "../../constants/api";
function App() {
  return (
    <div>
      <BrowserRouter basename={`/${REPO_NAME}/`}>
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
