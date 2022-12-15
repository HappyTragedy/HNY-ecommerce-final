import React from "react";
import { Container } from "./Styled";
import Logo from "../../assets/images/yashahime.png";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const NavBar2 = () => {
  return (
    <div className="patron" style={{ boxShadow: "0px 0px 15px 0px #000000b8" }}>
      <Container>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo"></img>
          </Link>
        </div>
        <NavBar />
      </Container>
    </div>
  );
};

export default NavBar2;
