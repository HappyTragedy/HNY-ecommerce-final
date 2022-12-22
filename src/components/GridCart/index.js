import React from "react";
import { GridContainer, ColContainer, ColContainerForm } from "./styled";

const GridCart = ({ children, ...props }) => {
  return (
    <GridContainer key={props} colGap={props.colGap} rowGap={props.rowGap}>
      {children}
    </GridContainer>
  );
};

const ColCart = ({ children, ...props }) => {
  return (
    <ColContainer
      key={props}
      desktop={props.desktop}
      tablet={props.tablet}
      mobile={props.mobile}
    >
      {children}
    </ColContainer>
  );
};

const ColCartForm = ({ children, ...props }) => {
  return (
    <ColContainerForm
      key={props}
      desktop={props.desktop}
      tablet={props.tablet}
      mobile={props.mobile}
    >
      {children}
    </ColContainerForm>
  );
};

export { GridCart, ColCart, ColCartForm };
