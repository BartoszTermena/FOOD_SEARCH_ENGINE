import React, { Component, Fragment } from 'react'
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

export default class RecipeList extends Component {
  render() {
    return (
      <Fragment>
        <h1>Recipe List</h1>
        <RecipeSearch />
        <Recipe />
      </Fragment>
    )
  }
}
