"use client";

import styled from "styled-components";
import Link from "next/link";

const Menu = ({ rollDown, setRollDown }) => {
  const scrollWithOffset = (el, yOffset) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <Dropdown onClick={() => setRollDown(false)}>
      {rollDown && (
        <>
          <Option href="/#home">Home</Option>
          <Option href="/#about-us">Our Clinic</Option>
          <Option href="/#services">
            Care & Services
          </Option>
          <Option href="/#contact">Contact Us</Option>
        </>
      )}
    </Dropdown>
  );
};

const Dropdown = styled.div`
  width: 100%;
  background-color: var(--silver);
  display: flex;
  flex-direction: column;
`;

const Option = styled(Link)`
  color: var(--light-grey);
  width: 100%;
  text-decoration: none;
  text-align: center;
  padding: 5px;
  transition: all 0.35s ease-in-out;

  &:hover {
    background-color: var(--yellow);
    font-size: 1.08em;
  }
`;

export default Menu;
