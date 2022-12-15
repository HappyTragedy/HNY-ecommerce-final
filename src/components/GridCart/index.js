import React from "react";
import { GridContainer, ColContainer } from "./styled";

const GridCart = ({ children, ...props }) => {
  return (
    <GridContainer colGap={props.colGap} rowGap={props.rowGap}>
      {children}
    </GridContainer>
  );
};

const ColCart = ({ children, ...props }) => {
  return (
    <ColContainer
      desktop={props.desktop}
      tablet={props.tablet}
      mobile={props.mobile}
    >
      {children}
    </ColContainer>
  );
};

export { GridCart, ColCart };
