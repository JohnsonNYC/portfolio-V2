import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import MarqueeButton from "./MarqueeButton";

const Intro = ({ node, setActiveTab }) => {
  return (
    <Container ref={node}>
      <TextContainer>
        <motion.div
          className="port__banner--text"
          initial={{ rotateZ: -90, x: "-100vw" }}
          animate={{ rotateZ: 0, x: 0 }}
          transition={{
            delay: 1.2,
            duration: 1,
            ease: "easeIn",
            stiffness: 80,
            type: "spring",
          }}
          style={{ transformOrigin: "bottom left " }}
        >
          <span>Creative</span>
          <span>Artist</span>
          <span>Developer</span>
        </motion.div>

        <motion.div
          className="port__banner--summary"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          I AM A CREATIVE FRONTEND DEVELOPER BASED IN NEW YORK CITY. WITH 3
          YEARS OF EXPERIENCE IN THE TECH INDUSTRY, I'VE WORKED AS A QA
          ENGINEER, FRONTEND DEVELOPER AND DEDICATED MY PASSION TO CRAFTING
          INTUITIVE AND BEAUTIFUL USER INTERFACES. BEYOND CODE, I FIND
          INSPIRATION IN NATURE, EMBRACE FITNESS, LOVE TO TRAVEL, ENJOY A GOOD
          PIZZA, AND THRIVE IN THE WORLD OF VISUAL DESIGN.
          <MarqueeButton
            handleClick={() => setActiveTab("contact")}
            text="Contact Me"
            customClassName="intro-contact-btn"
          />
        </motion.div>
      </TextContainer>
    </Container>
  );
};

export default Intro;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  min-height: 100vh;

  .intro-contact-btn {
    align-self: end;
    margin-top: 20px;
    display: block;
  }

  @media screen and (max-width: 1025px) {
    padding: 2rem 4em;
  }
`;

const TextContainer = styled.div`
  .port__banner--summary {
    color: white;
    letter-spacing: 1;
  }

  .port__banner--text {
    & > span {
      color: white;
      display: block;
      font-size: 4.375rem;

      &:first-of-type {
        color: #8eb69b;
        font-size: 1.5rem;
      }

      &:nth-of-type(2) {
        &::after {
          content: "&";
          color: #8eb69b;
          font-size: 1.5rem;
          margin-left: 7px;
        }
      }
    }
  }

  @media screen and (min-width: 1025px) {
    display: flex;
    align-items: end;
    justify-content: space-evenly;

    .port__banner--text {
      & > span {
        font-size: 8rem;

        &:first-of-type {
          font-size: 3rem;
        }

        &:nth-of-type(2) {
          &::after {
            content: "&";
            color: #8eb69b;
            font-size: 3rem;
            margin-left: 7px;
          }
        }
      }
    }

    .port__banner--summary {
      max-width: 500px;
      font-size: 1.875rem;
      margin-left: 30px;
    }
  }
`;
