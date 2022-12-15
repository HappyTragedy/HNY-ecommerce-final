import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 2fr);
  align-items: end;
  height: auto;
  font-family: "CatCafe";
  box-shadow: rgb(0 0 0 / 30%) 0px 6px 15px 3px;
  margin-top: 15%;
  height: 80vh;

  img {
    width: 70%;
    transition: transform 0.7s;
  }

  img:hover {
    transform: scale(1.1);
  }

  .foto {
    text-align: center;
    background-color: #f2f2f2;
    width: 100%;
    height: 33vh;
    padding: 13% 0% 27% 0%;
  }

  .info {
    background-color: white;
    width: 88%;
    height: 27.3vh;
    padding: 6%;
    text-align: left;
  }

  .info p {
    font-family: "Calibri";
  }

  .btnInfo {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 240px;
    margin-top: 30%;
  }

  .btn {
    letter-spacing: 0.1em;
    cursor: pointer;
    font-size: 14px;
    line-height: 35px;
    max-width: 60px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%;
    background-color: #f1f1f1;
    border-radius: 8px;
    font-family: 'CatCafe';
    border-color: transparent;
  }

  .btn:hover {
    text-decoration: none;
  }

  .effect {
    --uismLinkDisplay: var(--smLinkDisplay, inline-flex);
    display: var(--uismLinkDisplay);
    color: black;
    position: relative;
    transition-duration: 0.4s;
    overflow: hidden;
  }

  .effect::before,
  .effect span {
    margin: 0 auto;
    transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    transition-duration: 0.4s;
  }

  .effect:hover {
    background-color: black;
  }

  .effect:hover span {
    transform: translateY(-400%) scale(-0.1, 20);
  }

  .effect::before {
    content: attr(data-sm-link-text);
    color: white;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    transform: translateY(500%) scale(-0.1, 20);
  }

  .effect:hover::before {
    letter-spacing: 0.05em;
    transform: translateY(0) scale(1, 1);
  }

  a {
    padding: 2% 12%;
  }

  @media (max-width: 480px) {
    height: 93vh;

    .foto{
      height: 45vh;
      padding: 13% 0% 6% 0%;
    }

    .info{
      height: 31vh;
    }

    img{
      width: 55%;
    }

    .btnInfo{
      margin-top: 20%;
    }
  }
`;

const Aviso = styled.div`
  background-color: rgb(255, 255, 255, 0.9);
  width: 20%;
  padding: 2%;
  margin-left: 5%;
  color: black;
  font-family: "Calibri";
  position: fixed;
  top: 25%;
  left: 35%;

  @media (max-width: 480px) {
    width: 40%;
    left: 20%;
    text-align: center;
  }
`;

export { Container, Aviso };
