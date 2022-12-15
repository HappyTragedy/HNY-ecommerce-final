import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: ${(props) => props.colGap || 30}px;
  grid-row-gap: ${(props) => props.rowGap || 40}px;
  justify-items: end;

  @media (max-width: 480px) {
    grid-template-columns: repeat(1,1fr);
    justify-items: center;
  }
`;

const ColContainer = styled.div`
  grid-column: span ${(props) => props.desktop || 12};
  @media (max-width: 768px) {
    grid-column: span ${(props) => props.tablet || "12"};
  }
  @media (max-width: 480px) {
    grid-column: span ${(props) => props.mobile || "12"};
  }
`;

export { GridContainer, ColContainer };
