import React from "react";
import { HashRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import MainPage from "./Pages/MainPage";
import ContactPage from "./Pages/ContactPage";
import SelfSummary from "./Components/SelfSummary";
import AboutMe from "./Pages/AboutMe";
import { Column } from "./Styles/StyledComponents";
import Footer from "./Components/Footer";

const AppContainer = styled(Column)`
  min-height: 90vh;
  max-width: 1100px;
  margin: 0 auto;
  padding: 48px 40px;
  gap: 32px;

  @media (max-width: 768px) {
    padding: 24px 16px;
    gap: 20px;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #1e1e1e;
`;

const Navbar = styled.nav`
  display: flex;
  gap: 4px;
  border-bottom: 1px solid #1e1e1e;
  padding-bottom: 0;
`;

const NavbarLink = styled(Link)<{ $active?: boolean }>`
  font-size: 0.9rem;
  font-family: 'ZenDots', monospace;
  text-decoration: none;
  color: ${p => p.$active ? '#39d353' : '#555'};
  padding: 10px 20px;
  border-bottom: 2px solid ${p => p.$active ? '#39d353' : 'transparent'};
  transition: color 0.2s, border-color 0.2s;
  letter-spacing: 0.05em;

  &:hover {
    color: #39d353;
    text-shadow: none;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 8px 12px;
  }
`;

const NavWithLocation: React.FC = () => {
  const location = useLocation();
  return (
    <Navbar>
      <NavbarLink to="/" $active={location.pathname === "/"}>Games</NavbarLink>
      <NavbarLink to="/about-me" $active={location.pathname === "/about-me"}>About</NavbarLink>
      <NavbarLink to="/contact" $active={location.pathname === "/contact"}>Contact</NavbarLink>
    </Navbar>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <SelfSummary />
        <Divider />
        <NavWithLocation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </AppContainer>
      <Footer />
    </Router>
  );
};

export default App;
