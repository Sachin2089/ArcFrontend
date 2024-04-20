import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ExpandMenu from "./ExpandMenu";
import Logo from "../assets/Logo.png";

const Drawer = ({ isOpen, toggleDrawer, routes }) => {
  return (
    <>
      {isOpen && <Backdrop onClick={toggleDrawer} />}
      <SDrawer className="Grotesk-Normal overflow-y-hidden fixed bg-neutral-900 text-xl  text-white" isOpen={isOpen}>
        {/* Close button */}
        <RightNav>
        
          <NavRoutes>
            {routes.map((route) => {
              if (route.subRoutes) {
                return <ExpandMenu route={route} key={route.name} />;
              }
              return (
                <NavRoute
                  onClick={toggleDrawer}
                  to={route.link}
                  key={route.name}
                >
                  {route.name}
                </NavRoute>
              );
            })}
          </NavRoutes>
          <Link to="/contact" className="rounded-[5px] text-neutral-800 bg-yellow-400 p-2 ">Contact Us</Link>
        </RightNav>
        <CloseButton onClick={toggleDrawer} className="text-xl ml-2">Close </CloseButton>
      </SDrawer>
    </>
  );
};

export default Drawer;
const SNavbarBrand = styled.h2`
  font-size: 2rem;
`;
const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s ease;
  background-color: rgba(0, 0, 0, 0.2);
`;
const SDrawer = styled.div`
  z-index: 150;
  position: fixed; /* Change position to fixed */
  top: 0; /* Stick it to the top */
  height: 100vh;
  width: 70%;
  color: white;
  transition: 0.3s ease;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
`;

const RightNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  padding-bottom: 25px;
`;
const NavRoutes = styled.div``;
const NavRoute = styled(Link)`
  display: flex;
  text-decoration: none;
  color: white;
  padding: 0.5rem;
`;

const LoginButton = styled.button`
  padding: 0.7rem 3rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 3rem;
  transition: 0.3s ease;
  align-self: flex-start;

`;

const CloseButton = styled.button`
  align-self: flex-end; /* Align to the right */
  margin-right: 1rem; /* Add some margin for spacing */
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
`;