import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: "Poppins", sans-serif;
  }
  a{
    text-decoration:none;
    color:black;
  }
  img{
    object-fit:cover;
    width:100%;
    height:100%;
  }
  ::-webkit-scrollbar{
    width:8px;
    height: 8px;
  }
  ::-webkit-scrollbar-track{
    background: rgba(0,0,0,0.3);
  }
  ::-webkit-scrollbar-thumb{
    background:black;
    border-radius:5px;
  }
`;
