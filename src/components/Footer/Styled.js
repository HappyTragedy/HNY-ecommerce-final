import styled from "styled-components";

const ContainerFooter = styled.footer`
  height: auto;
  padding: 20px;
  background-color: #000;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .grid {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo {
    width: 20%;
    margin: 0% 10% 0% 5%;
  }

  .logo img {
    width: 100%;
  }

  .redes {
    width: 30vw;
  }

  .redes ul {
    list-style: none;
    display: flex;
    align-items: center;
    padding: 0;
    text-align: center;
    width: 65%;
    margin: 0 auto;
  }

  .redes img {
    cursor: pointer;
    width: 35%;
  }

  p {
    font-size: 16px;
    color: grey;
    text-align: center;
  }

  @media (max-width: 480px) {
    .grid {
      display: grid;
      grid-row-gap: 30px;
      justify-items: start;
    }

    .logo {
      width: 45%;
    }

    .redes {
      width: 80vw;
      margin: 0 auto;
    }

    .redes ul {
      display: flex;
      justify-content: space-between;
    }

    .redes img {
      width: 8vw;
    }
  }
`;

export { ContainerFooter };
