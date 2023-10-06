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
              Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTY5ZjNiZGY4ZTAzYTNmNTgwMjc3MjQwN2ZhZGU5NSIsInN1YiI6IjY0NTg5OWMwNmM4NDkyMDBlMzVkODAyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MuQ4fd3LaUZhSA-AIoWZnVQ9AU192ira98sLhNoHIq8"
          }
        })
        .then((res) => setData(res.data.results))
    }

    useEffect(()=> {
        getData()
    },[])

    
  return (
    <>
    {/* <Link to="/" className="dark:text-white text-xl ">
    ⬅
    </Link> */}
      <header className="gridContainer header bg-white dark:bg-black">
        <Switch justify="end" align="center" />
        <Heading title="MyMovies" size="16" as="h1" />
      </header>
      <main>
        <section className="HorizontalMovieListContainer">
          <div className="flex justify-between">
            <Heading title="Bookmarks" size="16" as="h2" />
            <Button title="See More" />
          </div>
          <div className="dark:text-white">
           {data && data.map((data)=> {
                return(
                    <>
                    <BookMarked key={data.id} title={data.title} rating={data.vote_average} releaseDate={data.release_date} image={`https://image.tmdb.org/t/p/w200/${data.backdrop_path}`} />
                    </>
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
