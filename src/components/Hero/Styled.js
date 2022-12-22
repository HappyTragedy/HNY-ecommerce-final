import styled from "styled-components";
import Hero from "../../assets/images/hynbanner.jpg";

const Hero2 = styled.div`
  background-position: center;

  iframe {
    width: 100%;
    height: 100%;
    aspect-ratio: 15 / 6;
    position: relative;
    z-index: -1;
  }

  .hero {
    width: 100%;
    height: 69vh;
    background: #00000052;
    left: 0;
    position: absolute;
    top: 23%;
    z-index: -1;
    color: white;
  }

  .hero h1,
  .hero p {
    position: absolute;
    top: 40%;
    left: 17%;
    transform: translate(-50%, -50%);
    font-family: "CatCafe";
    font-size: 2.2em;
    width: 26%;
  }

  .hero p {
    top: 53%;
    font-family: "Calibri";
    left: 17%;
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    background-image: url("${Hero}");
    background-size: cover;
    background-repeat: no-repeat;
    height: 75vh;
    position: relative;
    background-position: center;
    z-index: -1;

    iframe {
      display: none;
    }

    .hero{
      height: 61vh;
      top: 9%
    }

    .hero h1{
      left: 45%;
      width: 80%;
    }

    .hero p{
      top: 64%;
      left: 37%;
      width: 65%;
    }
  }
`;

export { Hero2 };
