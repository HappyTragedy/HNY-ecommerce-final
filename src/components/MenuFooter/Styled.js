import styled from "styled-components";

const MenuShop = styled.div`
  width: 30%;

  .grid {
    width: 80%;
  }

  .contenedor {
    padding: 5%;
    width: 65%;
    margin-left: 15%;
  }

  .contenedor a {
    padding: 7% 55% 7% 0%;
  }

  h2,
  a {
    color: white;
  }

  h2 {
    font-family: "CatCafe";
    margin-bottom: 13%;
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
    line-height: 60px;
    font-family: "Calibri";
  }

  li:hover {
    font-weight: bold;
    transition: 0.2s;
  }

  a {
    text-decoration: none;
    padding: 7% 55% 7% 7%;
    transition: 1s;
  }

  @media (max-width: 480px) {
    width: 50%;

    .contenedor {
      width: 50vw;
    }

    .redes {
      width: 75vw;
      margin: 0 auto;
    }
  }
`;

export { MenuShop };
