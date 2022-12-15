import styled from "styled-components";
import Hero from "../../assets/images/cart.webp";

const Hero4 = styled.div`
  background-image: url("${Hero}");
  background-size: cover;
  background-repeat: no-repeat;
  height: 75vh;
  position: relative;
  background-position: center;
  z-index: -1;

  .hero {
    text-align: center;
    width: 100%;
    height: 69vh;
    background: #ffffffad;
    left: 0;
    position: absolute;
    top: 4%;
  }

  .hero h1,
  .hero p {
    position: absolute;
    top: 40%;
    left: 28%;
    transform: translate(-50%, -50%);
    font-family: "CatCafe";
    font-size: 2.2em;
  }

  .hero p {
    top: 50%;
    font-family: "Calibri";
    left: 15%;
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    .hero h1 {
      width: 85%;
      text-align: left;
      left: 48%;
    }

    .hero p {
      text-align: left;
      left: 38%;
      top: 54%;
      width: 66%;
    }
  }
`;

export { Hero4 };
