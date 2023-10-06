
import styled, { css } from "styled-components";

const StyledImg = styled.img`
  ${(props) =>
    (props.shadow &&
      css`
        box-shadow: 0px 5px 10px rgb(0 0 0 / 0.35);
      `) ||
    (props.objectFit &&
      css`
        object-fit: cover;
      `)}

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 10px;
`;
const Image = (props) => {
  return <StyledImg className="dark:shadow-[5px_5px_5px] dark:shadow-[rgba(255,255,255,0.35)]" {...props} />;
};
export default Image;