import axios from "axios";

const searchImages = async (term) => {
 const response = await axios.get('https://api.unsplash.com/search/photos', {
   headers: {
     Authorization: 'Client-ID ifOgLwiAFFSzv1Tpfyi9p2-K9T9oZNuEztgZ0vwZNW4'
   },
   params: {
     query: term,
   },
  });

  console.log(response);

  return response.data.results;
};

export default searchImages;