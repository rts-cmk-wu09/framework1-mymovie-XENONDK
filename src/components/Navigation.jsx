import styled from "styled-components";
import { FaFilm, FaTicketAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background-color: white;
  font-size: 1.4rem;
  color: #979797;
  box-shadow: 0px 0px 5px 1px rgb(0 0 0 / 0.2);
`;

const Navigation = () => {
  return (
    <StyledNav className="dark:bg-black dark:text-white dark:shadow-[0px_0px_5px_1px] dark:shadow-white">
      <Link to="/" className="text-[#979797] dark:text-white">
      <FaFilm />
      </Link>
      <FaTicketAlt />
      <Link to="/bookmarks" className="text-[#979797] dark:text-white">
        <FaRegBookmark />
      </Link>
    </StyledNav>
  );
};

export default Navigation;
