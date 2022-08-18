import styled from "styled-components";

export const MainWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  overflow: hidden;
  font-size: 18px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .image-wrap {
    float: left;
    text-align: center;
    width: 82%;

    padding: 1.5em 9% 1em;
    border-bottom: 1px solid #ddd;
  }

  .image-wrap img {
    width: 100%;
    height: auto;
  }

  .info-wrap {
    float: left;
    width: 90%;
    padding: 5%;
  }

  .product-name {
    font-size: 1.5em;
  }

  .brand-name {
    font-size: 13px;
  }

  .product-text {
    font-size: 13px;
  }

  button {
    display: block;
    margin: 1em 0 0;
  }

  a:hover {
    color: #0687e6;
  }

  a:hover img {
    opacity: 0.9;
    transition: opacity 0.3s ease-in-out;
  }
`;
