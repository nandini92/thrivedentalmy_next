"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";

import Header from "../components/Header";
import MobileHome from "../components/MobileHome";
import Home from "../components/Home";
import About from "../components/About";
import Media from "../components/Media";
import Services from "../components/Services";
import Contact from "../components/Contact";

const Page = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the % of the page that user has scrolled through
      setScrollPercentage(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
          100
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useState(() => {
    if (typeof window !== 'undefined'){
      if(window.screen.width < 1000) {
        setScreenSize('small')
      } else {
        setScreenSize('large')
      }
    }
  }, [])

  return (
    <>
      <Header scrollPercentage={scrollPercentage} screenSize={screenSize} />
      <Container>
        {screenSize === 'large' ? (
          <>
            <Home scrollPercentage={scrollPercentage} />
            <About opacity={scrollPercentage > 5 ? 1 : 0} />
            <Media opacity={scrollPercentage > 35 ? 1 : 0} />
            <Services opacity={scrollPercentage > 45 ? 1 : 0} />
            <Contact opacity={scrollPercentage > 65 ? 1 : 0} />
          </>
        ) : (
          <>
            <MobileHome scrollPercentage={scrollPercentage} />
            <About opacity={scrollPercentage > 10 ? 1 : 0} />
            <Media opacity={scrollPercentage > 35 ? 1 : 0} />
            <Services opacity={scrollPercentage > 45 ? 1 : 0} />
            <Contact opacity={scrollPercentage > 80 ? 1 : 0} />
          </>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100%;
  background-color: var(--silver);
`;

export default Page;
