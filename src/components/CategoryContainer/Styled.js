import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 26.73% auto;
  grid-template-areas: "left right";
  height: auto;

  .grilla {
    padding-top: 7%;
    width: 85%;
    margin: 0 auto;
    margin-bottom: 7%;
  }

  .grilla h1{
    font-family: 'CatCafe';
  }

  @media (max-width: 480px) {
    display: block;
  }
`;

export { Container };
