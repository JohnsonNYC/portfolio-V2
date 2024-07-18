import React, { useState, lazy, Suspense } from "react";
import styled from "styled-components";

// Images
import SombleBW from "../img/SwingAndShootBW.jpg";
import SpecPic from "../img/spec-frame.png";
import InfosysBW from "../img/InfosysBW.jpg";
import Loading from "./Loading";

// Comps
import Modal from "./Modal";

const ExperienceDetails = lazy(() => import("./ExperienceDetails"));

const Experience = ({ node }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [active, setActive] = useState(null);

  const openModal = (activeSelection) => {
    setActive(activeSelection);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container ref={node}>
      <Header>Experience</Header>
      <ImagesContainer>
        <ImageWrapper>
          <TextContainer>
            <div>SOMBLE</div>
            <div>SOFTWARE ENGINEER, FRONTEND DEVELOPER</div>
          </TextContainer>

          <ImageContainer>
            <StyledImage
              src={SombleBW}
              alt="Somble"
              onClick={() => openModal("Somble")}
            />
          </ImageContainer>
        </ImageWrapper>

        <ImageWrapper>
          <TextContainer>
            <div>SPEC</div>
            <div>RESEARCH ASSOCIATE SOFTWARE ENGINEER</div>
          </TextContainer>

          <ImageContainer>
            <StyledImage
              src={SpecPic}
              alt="Spec"
              onClick={() => openModal("SPEC")}
            />
          </ImageContainer>
        </ImageWrapper>

        <ImageWrapper>
          <TextContainer>
            <div>INFOSYS</div>
            <div>TECHNICAL ASSOCIATE</div>
          </TextContainer>

          <ImageContainer>
            <StyledImage
              src={InfosysBW}
              alt="Infosys"
              onClick={() => openModal("Infosys")}
            />
          </ImageContainer>
        </ImageWrapper>
      </ImagesContainer>

      <Suspense fallback={<Loading />}>
        <Modal isOpen={isModalOpen} handleClose={closeModal}>
          <ExperienceDetails active={active} />
        </Modal>
      </Suspense>
    </Container>
  );
};

const ImageContainer = styled.div`
  max-width: 500px;
  width: 100%;
  max-height: 240px;
  height: 240px;
  overflow: hidden;
  transition: transform 390ms ease-in-out;

  :hover {
    transform: scale(0.9);
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;

  & > div:first-of-type {
    font-size: 80px;
  }

  @media screen and (max-width: 1025px) {
    width: 100%;
    margin-bottom: 5px;

    &>div: first-of-type {
      font-size: 50px;
    }
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  div {
    text-align: center;
    &:first-of-type {
      margin-right: 10px;
    }
  }

  @media screen and (max-width: 1025px) {
    flex-direction: column;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  font-weight: 400;
  font-size: 20px;

  @media screen and (min-width: 1025px) {
    font-size: 1.875rem;
  }
`;
const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  color: white;

  min-height: 100vh;
  height: fit-content;
`;

const StyledImage = styled.img`
  cursor: pointer;
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: transform 350ms ease-in-out;

  @media screen and (max-width: 425px) {
    width: 100%;
  }

  &:hover {
    transform: scale(1.2);
  }
`;

export default Experience;
