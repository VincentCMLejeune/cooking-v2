import { useEffect, useState } from "react";

import data from "../../data/data.json";

import "./Recipe.css";

export default function Recipe() {
  const [currentRecipe, setCurrentRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.recipes.filter(
      (recipe) =>
        recipe.lowerCaseName === window.location.pathname.split("/recipe/")[1]
    );
    if (foundRecipe.length > 0) {
      setCurrentRecipe(foundRecipe[0]);
    } else {
      setCurrentRecipe("not found");
    }
  }, []);

  return currentRecipe !== null && currentRecipe.name ? (
    <div className="recipe">Current Recipe: {currentRecipe.name}</div>
  ) : (
    currentRecipe === "not found" && <div>Not found</div>
  );
}
