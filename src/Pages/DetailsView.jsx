import styled, { css } from "styled-components";
import Switch from "../components/Switch";
import { FaArrowLeft, FaPlay } from "react-icons/fa";
import MovieInfo from "../templates/MovieInfo";
import MovieDescription from "../templates/MovieDescription";
import MovieCast from "../templates/MovieCast";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";
import Navigation from "../components/Navigation";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 2;
  height: 232px;
`;

const StyledLink = styled(Link)`
position: relative; /* fix z position on safari mobile */
grid-column-start: 1;
  grid-row-start: 1;
  margin-top: 2rem;
  margin-left: 2rem;
  color: white;
`

const StyledIframe = styled.iframe`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
`;
const StyledSwitch = styled(Switch)`
  grid-column-start: 2;
  margin-top: 2rem;
  margin-right: 2rem;
`;
const StyledMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  padding: 2rem;
  margin-top: -10px;
`;

const DetailsView = () => {

  const DetailData = useLoaderData();
  console.log("DetailsData: ", DetailData);
  return (
    <>
      <StyledHeader>
        <StyledIframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${DetailData.details.videos.results[0].key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></StyledIframe>
        <StyledLink to="/">
          <FaArrowLeft />
        </StyledLink>

        <StyledSwitch justify="end" align="top" />
      </StyledHeader>
      <StyledMain className="dark:bg-black">
        <MovieInfo data={DetailData.details} />
        <MovieDescription data={DetailData.details} />
        <MovieCast data={DetailData.cast} />
      </StyledMain>
      <footer>
        <Navigation />
      </footer>
    </>
  );
};

export const DetailsViewData = async ({ params }) => {
  return Promise.allSettled([
    axios(
      `http://api.themoviedb.org/3/movie/${params.id}?api_key=7e69f3bdf8e03a3f5802772407fade95&append_to_response=videos`
    ),
    axios(
      `http://api.themoviedb.org/3/movie/${params.id}/credits?api_key=7e69f3bdf8e03a3f5802772407fade95`
    ),
  ]).then((data) => {
    return {
      details: data[0].value.data,
      cast: data[1].value.data,
    };
  });
};

export default DetailsView;
