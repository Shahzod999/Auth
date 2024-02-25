// src/components/Answer.tsx
import React from 'react';

interface AnswerProps {
  text: string;
  onClick: () => void;
}

const Answer: React.FC<AnswerProps> = ({ text, onClick }) => {
  return (
      <button className='AnswerBtn btn1 hover-filled-slide-right' onClick={onClick}><span>{text}</span></button>
  );
};

export default Answer;
