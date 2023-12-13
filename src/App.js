import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const createRecipe = (newRecipe) => {
    setRecipes(prevRecipes => [...prevRecipes,newRecipe])
}
  
  const deleteRecipe = (indexToDelete) => {
    setRecipes(recipes.filter((ignored, index) => index !== indexToDelete));
  }
      
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} onDelete={deleteRecipe}/>
      <RecipeCreate onCreateRecipe={createRecipe}/>
    </div>
  );
}

export default App;
