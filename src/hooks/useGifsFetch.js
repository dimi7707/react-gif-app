import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs';


export const useGifsFetch = ( category ) => {

  const [state, setstate] = useState({ data: [], loading: true });

  useEffect(() => {
    getGifs(category)
      .then( result => {
        setTimeout(() => {
          setstate({ data: result, loading: false });
        }, 3000);

      })
  }, [ category ]);

  return state;
};
