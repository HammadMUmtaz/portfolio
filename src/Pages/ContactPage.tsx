import React, { useState } from 'react';
import styled from 'styled-components';
import { Column } from '../Styles/StyledComponents';

const Container = styled(Column)`
  align-items: flex-start;
  max-width: 480px;
  gap: 8px;
`;

const Label = styled.span`
  font-family: 'ZenDots', monospace;
  font-size: 0.7rem;
  color: #39d353;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const Title = styled.h2`
  margin: 0 0 24px 0;
  font-family: 'PhoenixGaming', sans-serif;
  font-size: 1.8rem;
  color: #f0f0f0;
`;

const FieldLabel = styled.label`
  font-size: 0.78rem;
  color: #555;
  font-family: 'ZenDots', monospace;
  letter-spacing: 0.06em;
  margin-top: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 11px 14px;
  border: 1px solid #1e1e1e;
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: 'Oxanium', monospace;
  background: #111;
  color: #d4d4d4;
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;

  &:focus {
    border-color: #39d353;
  }

  &::placeholder { color: #333; }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 11px 14px;
  border: 1px solid #1e1e1e;
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: 'Oxanium', monospace;
  background: #111;
  color: #d4d4d4;
  outline: none;
  height: 130px;
  resize: vertical;
  transition: border-color 0.2s;
  box-sizing: border-box;

  &:focus {
    border-color: #39d353;
  }

  &::placeholder { color: #333; }
`;

const Button = styled.button`
  margin-top: 12px;
  padding: 12px 28px;
  background: #39d353;
  color: #0d0d0d;
  border: none;
  border-radius: 6px;
  font-size: 0.85rem;
  font-family: 'ZenDots', monospace;
  cursor: pointer;
  letter-spacing: 0.06em;
  transition: background 0.2s, transform 0.15s;

  &:hover {
    background: #57e870;
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.98);
  }
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
    <Container>
      <Label>// contact</Label>
      <Title>Get In Touch</Title>

      <FieldLabel>YOUR NAME</FieldLabel>
      <Input
        type="text"
        placeholder="John Doe"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <FieldLabel>MESSAGE</FieldLabel>
      <TextArea
        placeholder="I'd like to talk about..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <Button onClick={handleSubmit}>Send via WhatsApp →</Button>
    </Container>
  );
};

export default ContactMe;
