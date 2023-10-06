import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFavorite } from "../hooks/useFavorite";
import axios from "axios";


const Bookmark = () => {
  let { id } = useParams(false);
  const [render, setRender] = useState(false)
  const [marked, setMarked] = useState(undefined);
  
  

  useEffect(() => {
    marked && setMarked(marked)
  },[marked])

  useEffect(() => {
    if (render) {
        const options = {
            method: "POST",
            url: "https://api.themoviedb.org/3/account/19377357/favorite",
            headers: {
              accept: "application/json",
              "content-type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTY5ZjNiZGY4ZTAzYTNmNTgwMjc3MjQwN2ZhZGU5NSIsInN1YiI6IjY0NTg5OWMwNmM4NDkyMDBlMzVkODAyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MuQ4fd3LaUZhSA-AIoWZnVQ9AU192ira98sLhNoHIq8",
            },
            data: { media_type: "movie", media_id: id, favorite: marked },
          };
      
          axios
            .request(options)
            .then(function (response) {
              console.log(response.data);
            })
            .catch(function (error) {
              console.error(error);
            });
    }
    
    setRender(true)
      
  }, [marked]);

 
  return (
    <span
      onClick={() => {
        setMarked(!marked);
      }}
    >
      {marked ? <FaBookmark /> : <FaRegBookmark />}
    </span>
  );
};

export default Bookmark;
