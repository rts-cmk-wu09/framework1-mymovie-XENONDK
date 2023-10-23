 import { FaRegBookmark, FaBookmark } from "react-icons/fa";
 import { useState, useEffect } from "react";
 import { useParams } from "react-router-dom";
 import { useFavorite } from "../hooks/useFavorite";



 const Bookmark = () => {
   let { id } = useParams(false);
   const favorite = useFavorite(parseInt(id))
   const [marked, setMarked] = useState(undefined);
  
  
   useEffect(() => {
     favorite && setMarked(favorite)
   },[favorite])
   const [render, setRender] = useState(false)

 useEffect(() => {
   if (render) {
    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
        },
        body: JSON.stringify({media_type: 'movie', media_id: id, favorite: marked})
      };
      
      fetch('https://api.themoviedb.org/3/account/19377357/favorite', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
         }


 setRender(true)
 }, [marked]) 

    
      
  

 
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
