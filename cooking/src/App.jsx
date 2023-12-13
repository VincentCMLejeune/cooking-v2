import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Main from "./pages/main/Main";
import Admin from "./pages/admin/Admin";
import Recipe from "./pages/recipe/Recipe";
import NoMatch from "./pages/no match/NoMatch";

export default function App() {
  return (
    <div className="App">
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
