import React from "react";
import styled from "styled-components";
import Spline from "@splinetool/react-spline";

const AboutMe = ({ node }) => {
  return (
    <Container ref={node}>
      <SplineContainer>
        <Spline scene="https://prod.spline.design/YRuiHyC64e-jvBpo/scene.splinecode" />
      </SplineContainer>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center;
`;

const SplineContainer = styled.div`
  background-color: black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default AboutMe;
