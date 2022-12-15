import React from "react";
import { ContainerFooter } from "./Styled";
import Menu from "../MenuFooter/Menu";
import logo from "../../assets/images/yashahime.png";
import insta from "../../assets/images/instagram.png";
import fb from "../../assets/images/facebook.png";
import tw from "../../assets/images/twitter.png";

const Footer = () => {
  return (
    <div>
      <ContainerFooter>
        <div className="grid">
          <div className="logo">
            <img src={logo} alt="logo"></img>
          </div>
          <Menu />
          <div className="redes">
            <ul>
              <li>
                <img src={fb} alt="Facebook"></img>
              </li>
              <li>
                <img src={insta} alt="Instagram"></img>
              </li>
              <li>
                <img src={tw} alt="Twitter"></img>
              </li>
            </ul>
          </div>
        </div>
        <p>
          E-Commerce made by Fernández Micaela. Teacher: Amaro Leandro. &copy;
          Copyright 2022
        </p>
      </ContainerFooter>
    </div>
  );
};

export default Footer;
