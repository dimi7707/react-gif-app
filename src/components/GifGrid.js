import React from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem';
import { useGifsFetch } from '../hooks/useGifsFetch';

const GifGrid = ({ category, searchIndex }) => {

  const { data:images, loading } = useGifsFetch(category);

  return (
    <div className="separator-result-search">
      <i> Busqueda nro: { searchIndex } - categoría: <b>{ category }</b> </i>
      { loading &&  <p>Loading...</p> }
      <ol className="card-grid">
        {
          images.map((image) => (
            <GifGridItem
              key={ image.id }
              { ...image }
            />
          ))
        }
      </ol>
    </div>
  )
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
  searchIndex: PropTypes.number.isRequired
};

export default GifGrid;
