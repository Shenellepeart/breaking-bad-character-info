import React from "react";
import spinner from "../../img/spinner.gif";
import styled from 'styled-components';

const SpinnerImg = styled.img`
width: 200px;
margin: auto;
display: block;
`;

const Spinner = () => {
  return <SpinnerImg src={spinner} alt="spinner" />;
};

export default Spinner;
