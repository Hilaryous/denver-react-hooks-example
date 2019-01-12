import React, { Fragment } from 'react'
import SearchBar from './SearchBar'
import FoodList from './FoodList'
import NutritionInformation from './NutritionInformation'

const App = () => (
  <Fragment>
    <SearchBar />
    <div className="content">
      <FoodList />
      <NutritionInformation />
    </div>
  </Fragment>
)

export default App
