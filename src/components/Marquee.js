import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Marquee = ({ text }) => {
  const marqueeText = `${text} ${text} ${text} ${text} ${text} ${text}`;
  const maxWidthNode = useRef();
  const [maxWidth, setMaxWidth] = useState(null);

  useEffect(() => {
    if (
      !maxWidthNode ||
      !maxWidthNode.current ||
      !maxWidthNode.current.offsetWidth
    )
      return;

    setMaxWidth(maxWidthNode.current.offsetWidth);
  }, [maxWidthNode]);
  useEffect(() => {
    const startAnimation = () => {
      const spanElement = document.querySelector(".marquee span");
      if (spanElement) {
        spanElement.style.animationPlayState = "running";
      }
    };

    const stopAnimation = () => {
      const spanElement = document.querySelector(".marquee span");
      if (spanElement) {
        spanElement.style.animationPlayState = "paused";
      }
    };

    startAnimation();

    return () => {
      stopAnimation();
    };
  }, []);

  return (
    <Container maxWidth={maxWidth}>
      <div className={`marquee`}>
        <span>{marqueeText}</span>
        <span ref={maxWidthNode}>{text}</span>
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : "100%")};
  white-space: nowrap;
  overflow: hidden;

  .marquee {
    width: 300px;
    height: 30px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;

    &:hover {
      animation: marqueeEffect 5s infinite linear;
    }
  }

  @keyframes marqueeEffect {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

export default Marquee;
