import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import data from "./data/data.json";
import Main from "./pages/main/Main";
import Admin from "./pages/admin/Admin";
import Recipe from "./pages/recipe/Recipe";
import NoMatch from "./pages/no match/NoMatch";
import Header from "./components/header/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/recipe/*" element={<Recipe />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}
