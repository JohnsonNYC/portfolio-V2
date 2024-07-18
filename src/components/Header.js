import React from "react";
import styled from "styled-components";
import PDF from "./Documents/Resume.pdf";
import { motion } from "framer-motion";

const Header = ({ setActiveTab, node }) => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 1.5, type: "tween" }}
    >
      <Wrapper ref={node} id="header">
        <div>
          <HomeButton onClick={() => setActiveTab("home")}>
            My Portfolio{" "}
          </HomeButton>
          <NavigationLinks setActiveTab={setActiveTab} />
        </div>
      </Wrapper>
    </motion.div>
  );
};

const NavigationLinks = ({ setActiveTab }) => {
  const hoverStyler = { scale: 1.4, color: "#8EB69B" };
  return (
    <NavContainer>
      <motion.div onClick={() => setActiveTab("work")} whileHover={hoverStyler}>
        work,{" "}
      </motion.div>
      <motion.div
        onClick={() => setActiveTab("contact")}
        whileHover={hoverStyler}
      >
        contact
      </motion.div>
      <motion.div
        onClick={() => setActiveTab("about")}
        whileHover={hoverStyler}
      >
        about,{" "}
      </motion.div>
      <motion.a href={PDF} target="_blank" whileHover={hoverStyler}>
        Resume
      </motion.a>
    </NavContainer>
  );
};

const HomeButton = styled.div`
  cursor: pointer;
`;

const Wrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;

  background-color: rgba(0, 0, 0, 0.61);
  backdrop-filter: blur(5px);

  color: white;

  @media screen and (max-width: 375px) {
    transition: top 0.5s;
    top: ${(props) => (props.isVisible ? `0` : `-80px`)};
  }

  & > div {
    max-width: 1200px;
    height: 70px;
    display: flex;
    margin: 0 auto;
    align-items: flex-end;
    justify-content: space-between;

    &::after {
      content: "";
      width: 80%;
      position: absolute;
      left: 0;
      right: 0;
      border-bottom: 1px solid #fff;
      margin: auto;
    }

    & > div {
      margin: 0 10px 10px;
      padding: 0 2rem;
    }
  }
`;

const NavContainer = styled.div`
  display: flex;

  & > * {
    cursor: pointer;
    color: white;
    text-decoration: none;
    margin-right: 10px;
  }
`;
export default Header;
