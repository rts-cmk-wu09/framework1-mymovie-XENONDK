import styled from "styled-components";
import coverImage from "../assets/moviecover.png";

const StyledImg = styled.img`
box-shadow: 0px 5px 10px rgb(0 0 0/ 0.5)
`

const Image = () => {
  return <StyledImg src={coverImage} alt="Image cover" />;
};

export default Image;
