import { useState } from "react";
import { useEffect } from "react";


export function useGenre() {
    const [genres, setGenres] = useState()

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
            },
          };
      
          fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
            .then((response) => response.json())
            .then((response) => setGenres(response))
            .catch((err) => console.error(err));
    },[])

    return genres
}