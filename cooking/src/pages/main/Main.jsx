import { Link } from "react-router-dom";

import "./Main.css";

import data from "../../data/data.json";

export default function Main() {
  return (
    <div className="Main">
      <h1>Main page</h1>
      <h2>Recipes</h2>
      <div>
        {data.recipes.map((recipe, i) => {
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
