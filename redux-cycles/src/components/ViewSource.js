import React from 'react';
import styled from 'styled-components';
import GistIcon from 'react-icons/lib/go/gist'
import { white, marine } from '../styles/colors'

const Button = styled.a`
  font-size: 1rem;
  display: inline-block;
  background: ${marine.toString()};
  color: ${marine.mix(white, 0.9).toString()};
  padding: 0.3rem 0.7rem;
  border-radius: 0.2rem;
  text-decoration: none;
  line-height: 1.1;
  float: ${props => props.noFloat ? 'no' : 'right'};
`;

const Icon = styled(GistIcon)`
  margin-right: 0.4rem;
`;

const ViewSource = ({ id, noFloat }) => (
  <Button
    href={`http://jsfiddle.net/${id}/`}
    target="_blank"
    noFloat={noFloat}
  >
    <Icon/>
    Edit in JSFiddle
  </Button>
);

export default ViewSource;
