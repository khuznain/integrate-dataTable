import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #fff;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    outline: none;
    border: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  input{
    outline: 0;
    border-radius: 4px;
    border: 1px solid #bfc4ca;
  }

  input::placeholder{
    color: #BFC4CA;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  #root {
    width: 95%;
    margin: 0 auto;
    font-family: Arial, Helvetica, sans-serif;
    color: #5F6871;
  }
`;
