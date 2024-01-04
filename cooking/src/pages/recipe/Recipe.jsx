import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import data from "../../data/data.json";

import Header from "../../components/header/Header";

import "./Recipe.css";

export default function Recipe() {
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [personsIngredients, setPersonsIngredients] = useState(1);

  useEffect(() => {
    const foundRecipe = data.recipes.filter(
      (recipe) =>
        recipe.lowerCaseName === window.location.pathname.split("/recipe/")[1]
    );
    if (foundRecipe.length > 0) {
      setCurrentRecipe(foundRecipe[0]);
      setPersonsIngredients(foundRecipe[0].basePersonsIngredients);
    } else {
      setCurrentRecipe("not found");
    }
  }, []);

  return currentRecipe !== null && currentRecipe.name ? (
    <div className="recipe">
      <Header />
      <div className="recipe-title">{currentRecipe.name}</div>
      <div>Pour {personsIngredients}</div>
      <div>
        {currentRecipe.ingredients.map((ingredient, i) => (
          <div key={i}>{ingredient.join(" ")}</div>
        ))}
      </div>
      <div>
        {currentRecipe.recipe.map((step, i) => (
          <div key={i}>{step}</div>
        ))}
      </div>
      <div>
        {currentRecipe.isVegetarian && <div>Vegetarien</div>}
        {currentRecipe.isQuick && <div>Rapide</div>}
        {currentRecipe.isTuppable && <div>Tuppable</div>}
      </div>
    </div>
  ) : (
    currentRecipe === "not found" && (
      <div>
        <div>Not found</div>
        <Link to="/">
          <div>Go back</div>
        </Link>
      </div>
    )
  );
}
