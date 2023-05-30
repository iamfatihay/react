import styled from 'styled-components';

const ButtonS = styled.button`
  background-color: orange;
  color: blue;
  cursor: pointer;
  padding: 1rem 1.5rem; 
  border-radius: 5px;
  font-family: "tahoma";
  font-size: 30px;
  &:hover {
    transform: scale(0.95);
  }
`;

export const DomatesButon=styled(ButtonS)`
    color: green;
    background-color: aquamarine;
    border: 5px solid red;
    width: 300px;
`;

export default ButtonS;
