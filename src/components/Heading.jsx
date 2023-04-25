import styled from "styled-components";

const StyledHeading = styled((props) => props.as)`
  font-size: ${(props) => props.size}px;
  grid-column-start: 2;
  justify-self: center;
`;

const Heading = (props) => {
  return (
    // <StyledHeading size={props.size} as={props.as} weight={props.weight}>
    <StyledHeading {...props}>{props.title}</StyledHeading>
  );
};

export default Heading;
