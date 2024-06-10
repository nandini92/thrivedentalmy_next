'use client'

import styled from "styled-components";
import { useEffect, useState } from "react";
import Link from "next/link";

const MobileHome = ({ scrollPercentage }) => {
  const [imageNum, setImageNum] = useState(1);

  useEffect(() => {
    let num = 1;
    setInterval(() => {
      if (num === 1) {
        setImageNum(2);
        num++;
      } else {
        setImageNum(1);
        num--;
      }
    }, 5000);
  }, []);

  return (
    <Wrapper id="home" imagenum={imageNum}>
      <TextWrapper>
        <TitleText>
          <Title>
          Where Oral Health
          </Title>
          <Title2>
          Is Overall Health
          </Title2>
        </TitleText>
          <Button
            href="/#contact"
            style={{zIndex:1000}}
            position={scrollPercentage > 13 ? "fixed" : "static"}
            top={scrollPercentage > 9 ? "100px" : undefined}
            opacity={scrollPercentage > 95 ? "0" : "1"}
          >
            Contact Us
          </Button>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 26vh;
  height: 95vh;
  /* margin: 0 15%; */

  @media (width < 1000px) {
    display: block;
    padding-top: 65vh;
    background-image: ${(props) =>
      `url("/assets/home/mobileImage_${props.imagenum}.jpg")`};
    background-size: cover;
    background-position-x: center;
    background-position-y: top;
    margin: 0;
    height: 100vh;

    transition: background-image 0.5s ease-in-out;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-right: 10%; */
  width: 45vw;

  @media (width < 1000px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const TitleText = styled.div`
  /* padding-top: 50px; */
  position: relative;
  z-index: 1;
  font-size: 5rem;
  margin-bottom: 5vh;

  @media (width < 1000px) {
    text-align: center;
    padding: 0px;
    position: relative;
    font-size: 2.5em;
  }
`;
const Title = styled.h1`
  font-weight: 300;
  -webkit-animation: slideRight 1s;
  -moz-animation: slideRight 1s;
  -ms-animation: slideRight 1s;
  -o-animation: slideRight 1s;
  animation: slideRight 1s;

  @keyframes slideRight {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
  }
`;
const Title2 = styled.h1`
  font-weight: 500;
  padding-left: 150px;
  -webkit-animation: slideLeft 1s;
  -moz-animation: slideLeft 1s;
  -ms-animation: slideLeft 1s;
  -o-animation: slideLeft 1s;
  animation: slideLeft 1s;
  color: var(--zomp);

  @media (width < 1000px) {
    padding-left: 0px;
  }

  @keyframes slideLeft {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
const Button = styled(Link)`
  cursor: pointer;
  font-weight: 600;
  color: var(--eerie-black);
  background-color: var(--zomp);
  border-radius: 0.5rem;
  overflow: hidden;
  padding: 1rem 2rem;
  text-align: center;
  width: 200px;
  text-decoration: none;
  transition: 0.2s transform ease-in-out;
  will-change: transform;

  position: ${(props) => props.position};
  top: ${(props) => props.top};
  z-index: ${(props) => props.top};
  opacity: ${(props) => props.opacity};
  transition: 0.3s opacity ease-out;

  &:hover {
    color: var(--zomp);
  }

  &::after {
    background-color: var(--eerie-black);
    border-radius: 0.5rem;
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-110%, 0) rotate(10deg);
    transform-origin: bottom left;
    transition: 0.2s transform ease-out;
    z-index: -1;
  }

  &:hover::after {
    transform: translate(0, 0);
  }
`;

export default MobileHome;
