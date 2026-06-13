import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Column } from '../Styles/StyledComponents';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const glowBorder = keyframes`
  0%, 100% { border-color: rgba(168,85,247,0.3); box-shadow: 0 0 20px rgba(168,85,247,0.1); }
  50%       { border-color: rgba(6,182,212,0.3); box-shadow: 0 0 30px rgba(6,182,212,0.1); }
`;

const CenterContainer = styled(Column)`
  align-items: center;
  margin-top: 60px;
  animation: ${fadeInUp} 0.7s ease both;

  @media (max-width: 768px) { margin-top: 30px; }
`;

const ContactContainer = styled(Column)`
  width: 420px;
  max-width: 90vw;
  padding: 40px 50px;
  align-items: center;
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(168,85,247,0.3);
  animation: ${glowBorder} 4s ease-in-out infinite;

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
`;

const Title = styled.h2`
  margin: 0 0 24px 0;
  font-family: 'ZenDots', sans-serif;
  font-size: 1.4rem;
  background: linear-gradient(135deg, #a855f7, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.08em;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  margin: 8px 0;
  border: 1px solid rgba(168,85,247,0.3);
  border-radius: 10px;
  font-size: 0.95rem;
  font-family: 'Oxanium', sans-serif;
  background: rgba(168,85,247,0.05);
  color: #e2e8f0;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
  box-sizing: border-box;

  &:focus {
    border-color: #a855f7;
    box-shadow: 0 0 0 3px rgba(168,85,247,0.15);
  }

  &::placeholder { color: #4a5568; }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  margin: 8px 0;
  border: 1px solid rgba(168,85,247,0.3);
  border-radius: 10px;
  font-size: 0.95rem;
  font-family: 'Oxanium', sans-serif;
  background: rgba(168,85,247,0.05);
  color: #e2e8f0;
  outline: none;
  height: 120px;
  resize: vertical;
  transition: border-color 0.3s, box-shadow 0.3s;
  box-sizing: border-box;

  &:focus {
    border-color: #a855f7;
    box-shadow: 0 0 0 3px rgba(168,85,247,0.15);
  }

  &::placeholder { color: #4a5568; }
`;

const Button = styled.button`
  width: 100%;
  padding: 14px 20px;
  margin-top: 16px;
  background: linear-gradient(135deg, #a855f7, #06b6d4);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-family: 'ZenDots', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.05em;
  box-shadow: 0 0 20px rgba(168,85,247,0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 35px rgba(168,85,247,0.6);
  }

  &:active { transform: scale(0.97); }
`;

const ContactMe: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const formattedMessage = `Hey my name is ${name}\n${message}`;
    const url = `https://wa.me/${process.env.REACT_APP_WA_NUMBER}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <CenterContainer>
      <ContactContainer>
        <Title>💬 Contact Me</Title>
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextArea
          placeholder="Your Message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button onClick={handleSubmit}>⚡ Send via WhatsApp</Button>
      </ContactContainer>
    </CenterContainer>
  );
};

export default ContactMe;
