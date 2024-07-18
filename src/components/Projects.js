import React from "react";
import styled from "styled-components";

import AIShirt from "../img/projects/AItshirtThumbnail.png";
import Abelton from "../img/projects/AbeltonThumbnail.png";
import GamePhysics from "../img/projects/GamePhysicsThumbnail.png";
import PortfolioV1 from "../img/projects/PortfolioV1Thumbnail.png";
import Linda from "../img/projects/LindaThumbnail.png";
import { Github } from "lucide-react";

// Links

const projects = {
  "AI TSHIRT": {
    key: 1,
    link: "https://johnson-tech-ai-tshirt.netlify.app/",
    github: "https://github.com/JohnsonNYC/AIShirt",
    img: AIShirt,
  },
  ABELTON: {
    key: 2,
    link: "https://abelton-practice.netlify.app/",
    github: "https://github.com/JohnsonNYC/abelton-page",
    img: Abelton,
  },
  LINDA: {
    key: 3,
    link: "https://linda-spline.netlify.app/",
    github: "https://github.com/JohnsonNYC/spline-demo",
    img: Linda,
  },
  "GAME PHYSICS": {
    key: 4,
    link: "https://small-game-physics.netlify.app/",
    github: "https://github.com/JohnsonNYC/spline-physics-demo",
    img: GamePhysics,
  },
  "PORTFOLIO V1": {
    key: 5,
    link: "https://thejohnsonkow.netlify.app/",
    github: "https://github.com/JohnsonNYC/portfolio",
    img: PortfolioV1,
  },
};

const Projects = ({ node }) => {
  const handleProjectClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Container ref={node}>
      <Header>Projects</Header>
      <ImagesContainer>
        {Object.keys(projects).map((title) => {
          return (
            <ImageWrapper key={projects[title].key}>
              <TextContainer>
                <div>{title}</div>
                <Github
                  onClick={() => handleProjectClick(projects[title].github)}
                />
              </TextContainer>

              <ImageContainer
                onClick={() => handleProjectClick(projects[title].link)}
              >
                <StyledImage src={projects[title].img} alt={title} />
              </ImageContainer>
            </ImageWrapper>
          );
        })}
      </ImagesContainer>
    </Container>
  );
};

const Header = styled.div`
  font-weight: 400;
  font-size: 20px;

  @media screen and (min-width: 1025px) {
    font-size: 1.875rem;
  }
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
  align-items: center;

  width: 20%;

  & > div:first-of-type {
    font-size: 60px;
  }

  @media screen and (max-width: 1025px) {
    width: 100%;
    flex-direction: row;
    justify-content: center;

    & > div:first-of-type {
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

  svg {
    cursor: pointer;
  }
  @media screen and (max-width: 1025px) {
    flex-direction: column;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export default Projects;
