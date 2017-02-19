import styled from 'styled-components';
import theme from '../theme';
import { sam } from '../styles/colors';

const { tertiary } = theme.screen.colors;
const red = sam.toString()

const Mark = styled.span`
  display: inline;
  color: ${props => props.red ? red : tertiary};
`;

export default Mark;
