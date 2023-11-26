import { Link } from "react-router-dom";

import "./App.css";

import data from "./data/data.json";

export default function App() {
  return (
    <div className="App">
      <h1>Main page</h1>
      <h2>Recipes</h2>
      <div>
        {data.recipe.map((recipe, i) => {
          return (
            <div key={i}>
              <Link to={"recipe/" + recipe.lowerCaseName}>{recipe.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
