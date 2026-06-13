import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { styled, keyframes } from "styled-components";
import MainPage from "./Pages/MainPage";
import ContactPage from "./Pages/ContactPage";
import SelfSummary from "./Components/SelfSummary";
import AboutMe from "./Pages/AboutMe";
import { Column } from "./Styles/StyledComponents";
import Footer from "./Components/Footer";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 10px rgba(168,85,247,0.4); }
  50%       { box-shadow: 0 0 25px rgba(6,182,212,0.6); }
`;

const AppContainer = styled(Column)`
  min-height: 90vh;
  padding: 60px;
  gap: 30px;
  animation: ${fadeInUp} 0.8s ease both;

  @media (max-width: 768px) {
    gap: 0;
    padding: 30px 10px;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 10px;
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(168,85,247,0.2);
  border-radius: 50px;
  padding: 10px 30px;
  width: fit-content;
  align-self: center;
  animation: ${glowPulse} 4s ease-in-out infinite;

  @media (max-width: 768px) {
    margin-bottom: 0;
    padding: 8px 16px;
    gap: 6px;
  }
`;

const NavbarLink = styled(Link)<{ $active?: boolean }>`
  font-size: 1.1rem;
  text-decoration: none;
  color: ${p => p.$active ? '#06b6d4' : '#a0aec0'};
  font-weight: bold;
  font-family: 'ZenDots', sans-serif;
  padding: 8px 20px;
  border-radius: 30px;
  background: ${p => p.$active ? 'rgba(6,182,212,0.1)' : 'transparent'};
  border: 1px solid ${p => p.$active ? 'rgba(6,182,212,0.4)' : 'transparent'};
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    color: #fff;
    background: rgba(168,85,247,0.15);
    border-color: rgba(168,85,247,0.4);
    text-shadow: 0 0 8px rgba(168,85,247,0.8);
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 6px 12px;
  }
`;

const PageWrapper = styled.div`
  animation: ${fadeInUp} 0.5s ease both;
`;

const NavWithLocation: React.FC = () => {
  const location = useLocation();
  return (
    <Navbar>
      <NavbarLink to="/" $active={location.pathname === "/"}>🎮 Games</NavbarLink>
      <NavbarLink to="/about-me" $active={location.pathname === "/about-me"}>👨🏻‍💻 About</NavbarLink>
      <NavbarLink to="/contact" $active={location.pathname === "/contact"}>💬 Contact</NavbarLink>
    </Navbar>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.body.style.backgroundPosition = `${window.scrollY * 0.02}px ${window.scrollY * 0.3}px`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <AppContainer>
        <SelfSummary />
        <NavWithLocation />
        <PageWrapper>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
        </PageWrapper>
      </AppContainer>
      <Footer />
    </Router>
  );
};

export default App;
