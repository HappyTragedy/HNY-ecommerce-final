import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;
  border-radius: 30px;
  height: 65vh;
  justify-content: space-evenly;
  text-align: center;

  width: 90%;
  margin: 0 auto;
  margin-top: 8%;

  h2 {
    font-family: "CatCafe";
    font-size: 2.5em;
    margin: 20% 0% 4% 0%;
  }

  .btnInfo {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 240px;
  }

  .btn {
    letter-spacing: 0.1em;
    cursor: pointer;
    font-size: 14px;
    line-height: 35px;
    max-width: 60px;
    position: relative;
    -webkit-text-decoration: none;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%;
    background-color: #f1f1f1;
    border-radius: 8px;
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

  a {
    padding: 2% 12%;
  }

  @media (max-width: 480px) {
    margin-top: 9%;
    justify-content: space-between;
    height: auto;

    h2 {
      margin: 15% 0% 4% 0%;
    }
  }
`;

export { Container };
