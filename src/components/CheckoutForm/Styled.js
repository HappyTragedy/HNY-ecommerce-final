import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f2f2f2;
  padding-bottom: 23.2%;
  width: 35vw;
  align-items: baseline;

  .btn {
    font-family: "CatCafe";
    letter-spacing: 0.1em;
    cursor: pointer;
    font-size: 14px;
    line-height: 40px;
    max-width: 55%;
    position: relative;
    -webkit-text-decoration: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%;
    background-color: #e2e2e2;
    border-radius: 8px;
    margin: 0 auto;
    height: 6vh;
    border-color: transparent;
  }

  &:hover {
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
    -webkit-transform: translateY(-400%) scale(-0.1, 20);
    transform: translateY(-400%) scale(-0.1, 20);
  }

  .effect::before {
    content: attr(data-sm-link-text);
    color: white;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    -webkit-transform: translateY(500%) scale(-0.1, 20);
    transform: translateY(500%) scale(-0.1, 20);
  }

  .effect:hover::before {
    letter-spacing: 0.05em;
    -webkit-transform: translateY(0) scale(1, 1);
    transform: translateY(0) scale(1, 1);
  }

  @media (max-width: 480px) {
    width: 91vw;
  }
`;

const Formulario = styled.form`
  display: grid;
  row-gap: 23%;
  padding: 31% 0% 0% 0%;
  margin: 0 auto;

  .titulo {
    text-align: center;
  }

  .titulo h1 {
    font-family: "CatCafe";
  }

  .titulo h3 {
    font-family: "Calibri";
    font-weight: lighter;
  }
`;

const Field = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 2px solid lightgrey;
  outline: 0;
  font-size: 12px;
  color: black;
  padding: 7px 0;
  background: transparent;

  &::placeholder {
    color: grey;
  }
`;

export { Container, Formulario, Field };
