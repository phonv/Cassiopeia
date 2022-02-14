import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
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
    background: black;
    border-radius: 5px;
  }
  .swiper{
    overflow: clip visible;
  }
  .swiper-wrapper{
    padding: 20px 0;
  }
  .swiper-button-next,
  .swiper-button-prev{
    top: -30px;
    opacity: 0;
    ::after{
      width: 30px;
      height: 30px;
    }
  }
  .swiper-button-disabled{
    opacity: 0 !important;
  }
  .swiper-button-next{
    right:0 !important;
  }
  .swiper-button-prev{
    left: calc(100% - 75px) !important;
  }
  .ant-modal-content{
    padding:0 60px;
  }
  .ant-modal-header{
    padding:16px 0;
  }
  .ant-modal-title{
    font-size: 20px;
  }
`;
