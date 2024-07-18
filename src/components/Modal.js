import React, { useRef } from "react";
import styled from "styled-components";
import BackgroundImage from "../img/ExperienceBackDrop.jpeg";

const Modal = ({ children, handleClose, isOpen }) => {
  const modalNode = useRef();

  return (
    <Wrapper ref={modalNode} isOpen={isOpen}>
      <div onClick={handleClose}>Back</div>
      {children}
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding: 20px;
  overflow: hidden;

  background: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  z-index: 5;
  color: white;

  ${(props) =>
    props.isOpen
      ? `
      opacity: 1; 
      transition: opacity 300ms; 
  `
      : `
  opacity: 0; 
  z-index: -5; 
  transition: opacity 200ms ease-in, z-index 300ms; 
  `}
`;
