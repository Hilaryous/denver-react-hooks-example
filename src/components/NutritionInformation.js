import React from 'react'
import PropTypes from 'prop-types'

const NutritionInformation = ({ nutrients = [] }) => (
  <div className="nutrition-information">
    <div className="title">
      Nutrition Information
    </div>
    <div>
      {nutrients.map(({ title, amount, units }) => (
        <div>
              <p>{`${title}: ${amount} ${units}`}</p>
        </div>
      ))}
    </div>
  </div>
)

NutritionInformation.propTypes = {
    nutrients: PropTypes.shape({
      title: PropTypes.string,
      amount: PropTypes.number,
      units: PropTypes.string,
      percentageOfDailyNeeds: PropTypes.string,
    }),
}

export default NutritionInformation
