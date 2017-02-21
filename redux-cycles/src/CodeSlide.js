import React, { Component } from 'react';
import CodeSlide from 'spectacle-code-slide';
import styled from 'styled-components';

import { diffuseShadow } from './styles/shadows';
import theme from './theme';

// Prevent animation hook for PFC
CodeSlide.prototype.componentWillEnter = function () {};
CodeSlide.prototype.componentWillAppear = function () {};
CodeSlide.prototype.componentWillLeave = function () {};

const { primary } = theme.screen.colors;

const StyledCodeSlide = styled(CodeSlide)`
  max-height: 100% !important;
  height: 100% !important;
  width: 98% !important;
  max-width: 1000px !important;
  background: ${primary} !important;

  > h1 {
    border: none !important;
  }

  > pre {
    padding: 30% 0px !important;
    font-size: 1.6rem !important;
    height: 100% !important;
  }

  > div {
    text-align: center !important;
    width: auto !important;
    left: 4rem !important;
    right: 4rem !important;
    bottom: 3rem !important;
    font-family: inherit !important;
    font-size: 2rem;
    border-radius: 0.5rem;
    background: ${primary} !important;
  }

  > img {
    border-radius: 0.5rem;
    box-shadow: ${diffuseShadow};
    max-width: 40rem;
    max-height: 90%;
  }
`;

export default class WrappedCodeSlide extends Component {
  render () {
    return (
      <StyledCodeSlide
        {...this.props}
        transition={[]}
      />
    )
  }
}
