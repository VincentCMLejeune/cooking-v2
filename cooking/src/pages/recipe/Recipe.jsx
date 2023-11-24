import { useEffect, useState } from "react";

import "./Recipe.css";

export default function Recipe() {
  const [currentRecipe, setCurrentRecipe] = useState(null);

  useEffect(() => {
    const urlRecipe = window.location.pathname.split("/recipe/")[1];
    setCurrentRecipe(urlRecipe);
  }, []);
  return <div className="recipe">Current Recipe: {currentRecipe}</div>;
}
