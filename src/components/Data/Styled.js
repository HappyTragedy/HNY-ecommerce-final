import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
  width: 100%;
  text-align: center;
  background-color: white;
  padding: 6% 0%;
  margin: 25% 0% 5% 0%;

  ul {
    display: grid;
    padding: 0;
    grid-template-columns: repeat(5, 1fr);
    width: 90%;
    margin: 0 auto;
    grid-gap: 7%;
  }

  li {
    display: grid;
    justify-items: center;
    align-items: start;
    align-content: space-around;
  }

  a {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    line-height: 60px;
    display: inline-block;
    background-color: #e9e9e9;
    cursor: default;
    margin-bottom: 8%;
  }

  img {
    width: 70%;
    display: inline;
    position: relative;
    top: 15%;
  }

  strong{
    font-family: 'CatCafe';
    margin-bottom: 4%;
  }

  span {
    font-size: 14px;
  }

  @media (max-width: 480px) {

    padding: 10% 0% 6% 0%;

    ul{
      grid-template-columns: repeat(1,1fr);
      grid-gap: 0;
    }

    li{
      margin-bottom: 10%;
    }
  }
`;

export { Container };
