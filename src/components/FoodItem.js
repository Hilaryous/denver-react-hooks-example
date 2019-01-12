import React from 'react'
import PropTypes from 'prop-types'

const FoodItem = ({ foodItem: { name, image, id } }) => (
  <div className="food-item">
    <div className="title">
      {name}
    </div>
    <img href={`${image}`} />
    <button>
      Get Nutrition Information
    </button>
  </div>
)

FoodItem.propTypes = {
  foodItem: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.id,
  }),
}

export default FoodItem
