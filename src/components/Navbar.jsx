import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";
import "../fonts/stylesheet.css";
import Logo from "../assets/Logo.png";

const Navbar = ({ toggleDrawer, routes }) => {
  return (
    <SNavbar className="Apercu-Regular shadow fixed w-screen z-50 top-0 backdrop-filter backdrop-blur-lg bg-opacity-05">
      <NavContainer className="px-4 lg:px-6 py-2">
        <DrawerButton onClick={toggleDrawer}>
          <FaBars />
        </DrawerButton>
        <img src={Logo} className="mr-3 h-16" alt="Logo" />
        <RightNav>
          <NavRoutes className="Grotesk-Normal text-base mx-2">
            {routes.map((route) => {
              if (route.subRoutes) {
                return <Menu route={route} key={route.name} />;
              }
              return (
                <NavRoute
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-yellow-300" : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-300 lg:p-0`
                  }
                  to={route.link}
                  key={route.name}
                >
                  {route.name}
                </NavRoute>
              );
            })}
          </NavRoutes>
          <ContactButton
            to="/contact"
            className="Grotesk-Black flex items-center justify-center text-black transition duration-200 ease-in-out border-[#10162f] bg-yellow-400 hover:bg-yellow-500 rounded-md text-base px-4 lg:px-5 py-2 lg:py-0 mr-2 focus:outline-none"
          >
            Contact Us
          </ContactButton>
        </RightNav>
      </NavContainer>
    </SNavbar>
  );
};

export default Navbar;

const DrawerButton = styled.button`
  all: unset;
  display: grid;
  @media (min-width: 768px) {
    display: none;
  }
`;

const SNavbar = styled.nav`
  z-index: 101;
`;
const NavContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
const RightNav = styled.div`
  display: flex;
  gap: 2rem;
`;
const NavRoutes = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  gap: 1rem;
  align-items: center;
`;
const NavRoute = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 0.5rem;
  transition: 0.5s ease;
`;
const ContactButton = styled(Link)`
  @media (max-width: 1024px) {
    display: none;
  }
`;
