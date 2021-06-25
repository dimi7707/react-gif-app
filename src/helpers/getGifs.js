export const getGifs = async ( category ) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=O9isww62Z0sCiAsI0acO4zOypgnum8Aw&q=${ encodeURI( category ) }`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const filteringData = data.map((gif) => (
    {
      id: gif.id,
      title: gif.title,
      image: gif.images?.original?.url
    }
  ));

  return filteringData;
};
