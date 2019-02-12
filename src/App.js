import React, { Component } from 'react';
import './App.css';
import { recipes } from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        {recipes.map(recipe => (
          <RecipeList key={recipe.recipe_id} recipe={recipe}/>
        ))}
        <RecipeDetails />
      </React.Fragment>
    );
  }
}

export default App;
