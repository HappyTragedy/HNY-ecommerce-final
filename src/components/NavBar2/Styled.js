import styled from "styled-components";
import Pattern from "../../assets/images/pattern.png";
import Font from "../../assets/fonts/CatCafe.ttf";

const Container = styled.div`
  height: 13vh;
  padding: 20px;
  background-image: url("${Pattern}");
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @font-face {
    font-family: "CatCafe";
    src: url("${Font}");
  }

  .patron {
    box-shadow: 0px 0px 20px 2px #000000;
  }

  .logo {
    position: relative;
    bottom: 8%;
  }

  img {
    width: 65%;
    padding: 0% 0% 0% 5%;
    filter: drop-shadow(0px 1px 1px black);
  }

  @media (max-width: 480px) {
    .logo {
      display: none;
    }
  }

  nav {
    position: absolute;
    bottom: 82%;
    right: 10%;

    ul {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      align-items: center;
      row-gap: 33%;
    }

    li {
      padding: 0 20px;
      list-style: none;
      color: white;
      text-decoration: none;
    }

    .four {
      grid-column: 1 / 3;
      grid-row: 2;
    }

    .five {
      grid-column: 2 / 4;
      grid-row: 2;
    }

    a {
      color: black;
      text-decoration: none;
      font-family: "CatCafe";
      font-size: 22px;
    }

    @media (max-width: 480px) {
      nav {
        position: relative;
      }
    }
  }
`;

export { Container };
