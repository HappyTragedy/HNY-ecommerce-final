import styled from "styled-components";
import Hero from "../../assets/images/Yashahimes.jpg";

const Hero3 = styled.div`
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
    left: 25%;
    transform: translate(-50%, -50%);
    font-family: "CatCafe";
    font-size: 2.2em;
  }

  .hero p {
    top: 50%;
    font-family: "Calibri";
    left: 16%;
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    .hero h1 {
      left: 44%;
      width: 80%;
    }

    .hero p{
      left: 36%;
      top: 56%;
      text-align: left;
    }
  }
`;

export { Hero3 };
