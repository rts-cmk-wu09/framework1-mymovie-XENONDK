import { useEffect, useState } from "react";
export function useFavorite(id) {
  const [favorite, setFavorite] = useState(undefined);
  useEffect(() => {
    // checking if boomark is marked using get my favorites endpoint methond
    // const options = {
    //     method: 'GET',
    //     headers: {
    //       accept: 'application/json',
    //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTY5ZjNiZGY4ZTAzYTNmNTgwMjc3MjQwN2ZhZGU5NSIsInN1YiI6IjY0NTg5OWMwNmM4NDkyMDBlMzVkODAyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MuQ4fd3LaUZhSA-AIoWZnVQ9AU192ira98sLhNoHIq8'
    //     }
    //   };
    //     fetch('https://api.themoviedb.org/3/account/19377357/favorite/movies?language=en-US&page=1&sort_by=created_at.asc', options)
    //     .then(response => response.json())
    //     .then(response =>  {
    //         const isFavorite = response.results.some((obj) => obj.id === id);
    //     setFavorite(isFavorite);
    //     } )
    //     .catch(err => console.error(err));


    // checking if bookmark is marked by using account state endpoint
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
        }
      };
      
      fetch(`https://api.themoviedb.org/3/movie/${id}/account_states`, options)
        .then(response => response.json())
        .then(response => setFavorite(response.favorite))
        .catch(err => console.error(err));
  }, []);
  return favorite;
}
