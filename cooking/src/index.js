// DEPENDENCIES
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import App from "./App";
import Admin from "./pages/admin/Admin";
import NoMatch from "./pages/no match/NoMatch";
import Recipe from "./pages/recipe/Recipe";

// COMPONENTS
import Header from "./components/header/Header";

// STYLING
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/recipe/*" element={<Recipe />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
