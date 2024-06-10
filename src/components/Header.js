"use client";

import { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

import Menu from "./Menu";
import Link from "next/link";

const Header = ({ scrollPercentage, screenSize }) => {
  const [rollDown, setRollDown] = useState(false);

  return (
    <Wrapper>
      <Content>
        <Logo src="/assets/thriveLogo2.png" alt="Thrive Dental Logo" />
        {screenSize === "large" ? (
          <Links>
            <Option href="/#home">Home</Option>
            <Option href="/#about-us">Our Clinic</Option>
            <Option href="/#services">Care & Services</Option>
            <Option href="/#contact">Contact Us</Option>
          </Links>
        ) : !rollDown ? (
          <Burger onClick={() => setRollDown(true)} />
        ) : (
          <Cross onClick={() => setRollDown(false)} />
        )}
      </Content>
      <Menu rollDown={rollDown} setRollDown={setRollDown} />
      <ScrollTracker style={{ width: `${scrollPercentage}%` }}></ScrollTracker>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100vw;
`;
const Content = styled.div`
  padding: 0px 15%;
  display: flex;
  background-color: white;
  justify-content: space-between;

  @media (width < 400px) {
    padding: 10px 10% 10px 5%;
  }
`;
const Logo = styled.img`
  height: 8vh;
  align-self: center;
`;
const Links = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;
const Option = styled(Link)`
  color: var(--eerie-black);
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  line-height: 100px;
  width: 100%;
  transition: all 0.35s ease-in-out;

  &:hover {
    background-color: var(--keppel);
    font-size: 1.08em;
  }
`;
const ScrollTracker = styled.div`
  height: 5px;
  background-color: var(--keppel);
`;
const Burger = styled(GiHamburgerMenu)`
  font-size: 1.1em;
  align-self: center;
  position: relative;
`;
const Cross = styled(RxCross2)`
  font-size: 1.1em;
  align-self: center;
  position: relative;
`;
export default Header;
