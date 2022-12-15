import styled from "styled-components";

const Container = styled.div`
  padding-bottom: 7%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;

  .menuBurguer {
    display: none;
  }

  nav {
    margin: 0 auto;

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    li {
      padding: 0 20px;
      list-style: none;
      color: white;
      text-decoration: none;
    }

    a {
      color: black;
      text-decoration: none;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0;

    nav {
      width: 80%;
      padding-bottom: 6%;
    }

    ul {
      display: flex;
      flex-direction: row;
      padding: 0;
      text-align: center;
    }

    nav ul{
        justify-content: space-between;
    }
  }
`;

export { Container };
