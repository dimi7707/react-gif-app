import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  return (
    <>
      <h2 className="animate__animated animate__bounce"> GifexpertApp </h2>
      <h5>Ingresa una categoria para visualizar gifs relacionados</h5>
      <AddCategory setCategories={ setCategories } />
      <hr />
      <ol>
        {
          categories.map((category, index) => (
            <GifGrid category={ category } key={ index } searchIndex={ categories.length } />
          ))
        }
      </ol>
    </>
  )
};

export default GifExpertApp;
