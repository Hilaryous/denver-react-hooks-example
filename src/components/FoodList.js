import React from 'react'
import PropTypes from 'prop-types'
import FoodItem from './FoodItem'

const FoodList = ({ food = [] }) => (
  <div className="food-list">
    { food.map(foodItem => (<FoodItem key={foodItem.name} foodItem={foodItem} />)) }
  </div>
)

FoodList.propTypes = {
  food: PropTypes.shape([
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      id: PropTypes.id,
    }),
  ]),
}

export default FoodList
