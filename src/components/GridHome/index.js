import React from "react";
import { GridContainer, ColContainer } from "./styled";

const GridHome = ({ children, ...props }) => {
  return (
    <GridContainer colGap={props.colGap} rowGap={props.rowGap}>
      {children}
    </GridContainer>
  );
};

const ColHome = ({ children, ...props }) => {
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

export { GridHome, ColHome };
