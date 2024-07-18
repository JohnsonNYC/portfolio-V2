import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";

// Comps
import Header from "./Header";
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";
import LetsConnect from "./LetsConnect";
import Footer from "./Footer";

import BackgroundImage from "../img/main-background-resized.jpeg";
const Portfolio = () => {
  // With Nav Link => 'work', 'about', 'contact'
  const [activeTab, setActiveTab] = useState(null);
  const [brightnessNum, setBrightnessNum] = useState(50);

  const headerNode = useRef();
  const introNode = useRef();
  const experienceNode = useRef();
  const aboutNode = useRef();
  const contactNode = useRef();
  const backgroundNode = useRef();
  const projectNode = useRef();

  const handleTabChange = () => {
    if (activeTab === "home") {
      window.scrollTo({
        top: introNode.current.offsetTop,
        behavior: "smooth",
      });
    }

    if (activeTab === "work") {
      window.scrollTo({
        top: experienceNode.current.offsetTop,
        behavior: "smooth",
      });
    }

    if (activeTab === "about") {
      window.scrollTo({
        top: aboutNode.current.offsetTop,
        behavior: "smooth",
      });
    }

    if (activeTab === "contact") {
      window.scrollTo({
        top: contactNode.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  /**
   * The `onScroll` function adjusts the brightness of a background element based on the user's scroll
   * position on the page.
   */
  const onScroll = () => {
    if (introNode.current && aboutNode.current && experienceNode.current) {
      const currentYPosition = window.scrollY;
      const startYPosition = introNode.current.offsetHeight;
      const endYPosition =
        introNode.current.offsetHeight +
        aboutNode.current.offsetHeight +
        experienceNode.current.offsetHeight;

      if (currentYPosition < startYPosition) {
        const maxBrightness = 50;
        const calculatedBrightness = Math.abs(
          ((startYPosition - currentYPosition) / startYPosition) * 100
        );
        const brightness = Math.min(maxBrightness, calculatedBrightness);
        setBrightnessNum(brightness);
      } else if (currentYPosition > endYPosition) {
        const maxBrightness = 50;
        const calculatedBrightness = Math.abs(
          Math.abs(((currentYPosition - endYPosition) / endYPosition) * 100)
        );
        const brightness = Math.min(maxBrightness, calculatedBrightness);

        setBrightnessNum(brightness);
      }
    }
  };

  useEffect(() => {
    if (activeTab) {
      handleTabChange();
      setTimeout(() => {
        setActiveTab(null);
      }, 500);
    }
  }, [activeTab]);

  return (
    <Container id="sc-main-container">
      <BackgroundContainer ref={backgroundNode} opacity={brightnessNum} />
      <Header setActiveTab={setActiveTab} node={headerNode} />
      <Intro node={introNode} setActiveTab={setActiveTab} />
      <AboutMe node={aboutNode} />
      <Experience node={experienceNode} />
      <Projects node={projectNode} />
      <LetsConnect node={contactNode} />
      <Footer />
    </Container>
  );
};

export default Portfolio;

const Container = styled.div`
  max-width: 100%;
  position: relative;
  box-sizing: border-box;
  font-family: "Bebas Neue";

  & > section {
    max-width: 1400px;
    min-height: 100vh;

    box-sizing: border-box;
    margin: 0 auto;
  }
`;

const BackgroundContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  background-color: red;

  content: "";
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;

  background: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(${(prop) => prop.opacity}%);
  z-index: -2;
`;
