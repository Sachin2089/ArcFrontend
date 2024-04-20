import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Menu = ({ route }) => {
  return (
    <SMenu>
      <MenuButton>{route.name}</MenuButton>
      <SubRoutesContainer className="rounded-[7px]">
        {route.subRoutes.map((subRoute) => (
          <SubRoute className="text-xl" to={subRoute.link} key={subRoute.name}>
            {subRoute.name}
          </SubRoute>
        ))}
      </SubRoutesContainer>
    </SMenu>
  );
};

export default Menu;
const SubRoutesContainer = styled.div`
background-color: white;
  position: absolute;
  min-width: 20rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  left: -1rem;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
  z-index:101;
`;
const SMenu = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${SubRoutesContainer} {
    visibility: visible;
    opacity: 1;
    cursor: pointer;
  }
`;

const MenuButton = styled.div`
  padding: 1rem;
`;

const SubRoute = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: 0.3s ease-in;
  z-index: 100;


`;