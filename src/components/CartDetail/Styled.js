import styled from "styled-components";

const Container = styled.div`
  max-width: 50%;

  background-color: rgb(255, 255, 255, 0.9);
  padding: 2% 3%;
  margin: 5% 0% 5% 2%;

  h1 {
    font-family: "CatCafe";
  }

  .datos {
    display: grid;
    grid-template-columns: 68.45% auto;
  }

  .contenedor {
    width: 49vw;
  }

  .imagen {
    padding: 2.5rem 0px;
    display: grid;
    width: 50vw;
    grid-template-columns: repeat(3, 1fr);
    justify-items: start;
    border-bottom: 1px solid rgb(173, 172, 170);
  }

  .imagen img {
    width: 75%;
    background-color: #f2f2f2;
    padding: 3%;
    margin-right: 4%;
  }

  .precio {
    display: grid;
    justify-content: end;
    align-items: center;
    margin: 0 auto;
  }

  .info {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
  }

  .addOrDelete {
    display: grid;
    grid-template-columns: repeat(3, 33%);
    margin: 0 auto;
    width: 16vw;
    align-items: center;
    justify-items: center;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 16px;
    margin-bottom: 5%;
  }

  .precioTotal {
    width: 50%;
  }

  .final {
    display: flex;
    justify-content: space-between;
    margin-top: 5%;
    align-items: center;
  }

  .btn,
  .btnend,
  .btnempty {
    letter-spacing: 0.1em;
    cursor: pointer;
    font-size: 14px;
    line-height: 25px;
    max-width: 50px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%;
    background-color: #f1f1f1;
    border-radius: 8px;
    font-family: "CatCafe";
    border-color: transparent;
    transition-duration: 0.4s;
  }

  .btn:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .btn:hover,
  .btnend:hover,
  .btnempty:hover {
    transition-duration: 0.4s;
    text-decoration: none;
    background-color: black;
    color: white;
  }

  .btnend {
    line-height: 35px;
    max-width: 85px;
  }

  .btnempty {
    line-height: 40px;
    max-width: 145px;
  }

  @media (max-width: 480px) {
    max-width: none;
    width: 85vw;
    margin: 5% 0% 5% 0%;

    .imagen {
      width: 85vw;
    }

    .imagen img {
      width: 25vw;
      padding: 6%;
    }

    .info {
      width: 50vw;
    }

    .addOrDelete {
      width: 35vw;
    }

    .btnend {
      line-height: 30px;
      max-width: 110px;
    }

    .btnempty {
      line-height: 30px;
      max-width: 130px;
    }

    .btn:disabled {
      opacity: 0.5;
    }
  }
`;

export { Container };
