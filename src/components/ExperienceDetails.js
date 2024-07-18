import React, { useRef } from "react";
import styled from "styled-components";
import { useMediaPredicate } from "../utils/hooks";
import { Github } from "lucide-react";

// Image
import SombleColor from "../img/SwingAndShootColor.jpeg";
import SpecPic from "../img/spec-frame.png";
import InfosysColor from "../img/InfosysColor.png";

// Somble Gallery
import ChatCenter from "../img/Somble/ChatCenter.png";
import CreatorProfile from "../img/Somble/CreatorProfile.png";
import Homepage from "../img/Somble/Homepage.png";
import UserDashboard from "../img/Somble/UserDashboardA.png";

const descriptionStore = {
  Somble:
    "An online platform for fitness instructors to host on-demand videos, programs, live sessions, and events",
  SPEC: "An open learning platform that empowers individuals to learn through training, mentorship, and internships ",
  Infosys:
    "A technology consulting company that uses automated testing with Selenium and Java for cleaner code and a more efficient codebase",
};

const experienceStore = {
  Somble: [
    "Developed analytics dashboard using Recharts for coaches to monitor revenue and views.",
    "Created interactive user threads, fostering engagement and communication.",
    "Led two profile redesigns, showcasing design skills and improving user experience.",
    "Engineered a responsive calendar for students to manage daily courses.",
    "Provided timely responses to customer support tickets, ensuring positive user experiences.",
  ],
  SPEC: [
    "Drove impactful changes to the company's main website, utilizing Gatsby for consistent updates and maintenance.",
    "Demonstrated web development expertise by implementing strategic enhancements and modernizing the website's infrastructure.",
  ],
  Infosys: [
    "Contracted with Southern Edison, utilizing Selenium and Java to create automated tests for enhanced efficiency and reliability.",
    "Maintained a focus on delivering automated solutions, improving testing processes and reducing manual efforts.",
  ],
};

const titleStore = {
  Somble: "Frontend Developer",
  SPEC: "Research Associate Software Engineer",
  Infosys: "Technical Associate",
};

const linkStore = {
  Somble: { site: "https://www.somble.com" },
};

const ExperienceDetails = ({ active }) => {
  const isMobile = useMediaPredicate("(max-width: 450px)");

  const galleryNode = useRef();

  const activeImage =
    active === "Somble"
      ? SombleColor
      : active === "SPEC"
      ? SpecPic
      : InfosysColor;

  const EXPERIENCE_STORE =
    active && experienceStore[active]
      ? isMobile
        ? experienceStore[active].slice(0, 2)
        : experienceStore[active]
      : [];

  const handlePrevButton = () => {
    galleryNode.current.scrollLeft -= 300;
  };

  const handleNextButton = () => {
    galleryNode.current.scrollLeft += 300;
  };

  return (
    <ExperienceContainer>
      <StyledOrgName>{active}</StyledOrgName>
      <StyeldDescription>{descriptionStore[active]}</StyeldDescription>

      {active === "Somble" ? (
        <SliderWrapper>
          <SliderContainer ref={galleryNode}>
            <StyledImage src={activeImage} alt="Active Image" />
            <StyledImage src={Homepage} alt="Homepage" />
            <StyledImage src={CreatorProfile} alt="Creator Profile" />
            <StyledImage src={UserDashboard} alt="User Dashboard" />
            <StyledImage src={ChatCenter} alt="ChatCenter" />
          </SliderContainer>

          <NavButton onClick={handlePrevButton}>Prev</NavButton>
          <NavButton onClick={handleNextButton}>Next</NavButton>
        </SliderWrapper>
      ) : (
        <StyledImage src={activeImage} />
      )}

      <DescriptionBlock>
        {EXPERIENCE_STORE ? (
          <>
            <ul>
              {EXPERIENCE_STORE.map((description, i) => {
                return <li key={`li-${i}`}>{description}</li>;
              })}
            </ul>
          </>
        ) : null}
      </DescriptionBlock>

      <FooterContainer>
        <span>{titleStore[active]}</span>
        {linkStore[active] && linkStore[active].site ? (
          <StyledLink href={linkStore[active].site} target="_blank">
            See Case
          </StyledLink>
        ) : null}

        {linkStore[active] && linkStore[active].repo ? (
          <div>
            <StyledLink href={linkStore[active].repo}>
              <Github />
            </StyledLink>
          </div>
        ) : null}
      </FooterContainer>
    </ExperienceContainer>
  );
};

export default ExperienceDetails;

const StyledLink = styled.a`
  margin-left: 10px;
  color: white;
`;
const NavButton = styled.button`
  border: 1.5px solid white;
  background: none;
  color: white;
  border-radius: 20px;
  padding: 5px 18px;
  font-weight: 700;
  cursor: pointer;
  width: 100px;

  &:hover {
    scale: 1.1;
    transition: scale 500ms ease-in;
  }
`;

const SliderWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > button {
    position: absolute;
    max-height: fit-content;

    &:first-of-type {
      left: 5%;
      top: 0;
      bottom: 0;
      margin: auto 0;
    }

    &:last-of-type {
      right: 5%;
      top: 0;
      bottom: 0;
      margin: auto 0;
    }

    @media screen and (max-width: 780px) {
      display: none;
    }
  }
`;

const SliderContainer = styled.div`
  overflow-x: auto;

  display: flex;
  align-items: center;

  max-width: 454px;
  width: 100%;
  margin: 0 auto;

  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  & > img {
    scroll-snap-align: start;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const DescriptionBlock = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    font-family: Helvetica;
    padding: 5px 10px;

    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.8px);
    -webkit-backdrop-filter: blur(7.8px);

    margin: 10px 0;
  }

  @media screen and (max-width: 375px) {
    ul {
      padding: 0 0 0 20px;
    }
  }
`;

const ExperienceContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 30px;

  cursor: default;
`;

const StyledOrgName = styled.div`
  font-size: 84px;
`;

const StyeldDescription = styled.p`
  font-size: 22px;
  margin-top: unset;
`;

const FooterContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  padding: 10px 20px;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.8px);
  -webkit-backdrop-filter: blur(7.8px);
`;

const StyledImage = styled.img`
  max-width: 454px;
  width: 100%;
  max-height: 430px;

  margin: 0 auto;
`;
