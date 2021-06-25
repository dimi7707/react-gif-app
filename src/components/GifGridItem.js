import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ({ id, title, image }) => {
  return (
    <div className="classic-card animate__backInDown">
      <img className="is-centered" src={ image } alt={ title } key={ id } />
      <p className="text-center">{ title }</p>
    </div>
  )
}

GifGridItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default GifGridItem
