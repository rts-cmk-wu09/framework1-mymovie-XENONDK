import styled from "styled-components";

const StyledSpan = styled.span`
  width: fit-content;
  padding: 4px 12px;
  background-color: #DBE3FF;
  color: #88A4E8;
  border-radius: 25px;
  text-transform: uppercase;
  font-size: 8px;
`;

const Label = (props) => {
  return <StyledSpan className="dark:bg-black dark:text-white dark:border-solid dark:border-[1px] dark:border-white dark:rounded-3xl">{props.title}</StyledSpan>;
};

export default Label;