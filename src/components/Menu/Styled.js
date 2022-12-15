import styled from "styled-components";

const MenuShop = styled.div`
  background-color: white;

  .grid {
    width: 100%;
    background-color: rgb(255, 255, 255);
  }

  .contenedor {
    padding: 5%;
  }

  .contenedor a {
    padding: 7% 55% 7% 0%;
  }

  h2 {
    font-family: "CatCafe";
    margin-bottom: 13%;
  }

  ul {
    padding: 0% 10% 0% 7%;
  }

  li {
    list-style: none;
    line-height: 60px;
    border-bottom: solid 1px lightgrey;
    font-family: "Calibri";
  }

  li:hover {
    background-color: #eaeaea;
    transition: 1s;
  }

  a {
    text-decoration: none;
    color: black;
    padding: 7% 55% 7% 7%;
    transition: 1s;
  }

  @media (max-width: 480px) {
    ul {
      display: flex;
      padding: 0;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    li {
      width: 55%;
      border-bottom: none;
      line-height: 24px;
    }

    .contenedor a{
      padding: 7% 0% 7% 0%;
    }
  }
`;

export { MenuShop };
