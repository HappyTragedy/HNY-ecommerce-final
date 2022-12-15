import styled from "styled-components";

const Container = styled.div`
  h1 {
    text-align: center;
    font-family: "CatCafe";
    margin-bottom: 5%;
  }

  .grid {
    height: 75vh;
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 33%);
    align-items: center;
    justify-content: center;
    text-align: center;
    row-gap: 15%;
    justify-items: center;
  }

  li {
    background-color: #f2f2f2;
    padding: 10%;
    width: 45%;
    box-shadow: rgb(0 0 0 / 30%) 0px 6px 15px 3px;
  }

  li img {
    text-align: center;
    width: 80%;
  }


  @media (max-width: 480px) {
    ul {
      grid-template-columns: repeat(2, 50%);
      padding: 0;
    }

    h1{
      margin: 15% 0% 10% 0%;
    }
  }
`;

export { Container };
