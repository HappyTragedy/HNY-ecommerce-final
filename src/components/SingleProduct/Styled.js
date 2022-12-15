import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: rgb(255, 255, 255, 0.9);
  padding: 5%;
  align-items: flex-start;
  width: 55%;
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 0) 0%,
    rgba(255, 255, 255, 1) 15%
  );

  .logo {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 5%;
  }

  .logo img {
    width: 30%;
  }

  .data {
    height: 60vh;
  }

  .nyp {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: solid 1px lightgrey;
  }

  .nyp h1 {
    font-family: "CatCafe";
    width: 60%;
  }

  .nyp p .extra {
    font-family: "Calibri";
    font-weight: lighter;
    font-size: 26px;
  }

  .extra {
    font-style: italic;
    font-size: 16px;
  }

  .btn {
    letter-spacing: 0.1em;
    cursor: pointer;
    font-size: 14px;
    line-height: 35px;
    max-width: 135px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%;
    background-color: #f1f1f1;
    border-radius: 8px;
    font-family: "CatCafe";
    border-color: transparent;
    margin: 7% 33%;
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

  .descrip {
    margin-top: 15%;
    font-family: "Calibri";
    line-height: 24px;
  }

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    width: 90%;

    .data {
      height: auto;
    }
  }
`;

const Container2 = styled.div`
  .producto {
    text-align: center;
    background-color: #f1f1f1;
    padding: 10%;
    margin: 16% 0% 16% 10%;
  }

  .producto img {
    width: 80%;
  }

  @media (max-width: 480px) {
    .producto {
      margin: 16% 10% 16% 10%;
    }

    .producto img {
      width: 100%;
    }
  }
`;

export { Container, Container2 };
