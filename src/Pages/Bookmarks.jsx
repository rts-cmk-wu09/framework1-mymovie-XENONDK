import Heading from "../components/Heading";
import Navigation from "../components/Navigation";
import Switch from "../components/Switch";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import BookMarked from "../templates/Bookmarked";
import { Link } from "react-router-dom";


const Bookmarks = () => {
    const [data, setData] = useState()

    function getData() {
        axios.get("https://api.themoviedb.org/3/account/19377357/favorite/movies", {
          headers : {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
          }
        })
        .then((res) => setData(res.data.results))
    }

    useEffect(()=> {
        getData()
    },[])

    
  return (
    <>
    
      <header className="gridContainer header bg-white dark:bg-black">
        <Switch justify="end" align="center" />
        <Heading title="MyMovies" size="16" as="h1" />
      </header>
      <main>
        <section className="HorizontalMovieListContainer ">
          <div className="flex justify-between">
            <Heading title="Bookmarks" size="16" as="h2" />
            <Button title="See More" />
          </div>
          <div className="dark:text-white mb-16 dark:bg-black">
           {data && data.map((data)=> {
                return(
                    
                    <Link to={`/details/${data.id}`} key={data.id} className="dark:text-white ">
                    <BookMarked  title={data.title} rating={data.vote_average} releaseDate={data.release_date} image={`https://image.tmdb.org/t/p/w200/${data.backdrop_path}`} genres={data.genre_ids} identifier={data.id}/>
                    </Link>
                    
                )
            })}  

               
          </div>
        </section>
      </main>
    

      <footer>
        <Navigation />
      </footer>
    </>
  );
};

export default Bookmarks;
