import styled from 'styled-components';

const ColorWheel = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: ${props => props.color};
  transition: background-color 0.1s ease-in-out;
  margin: 0 auto;
`;

export default ColorWheel;
