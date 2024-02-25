// src/components/Question.tsx
import React from 'react';
import Answer from './Answer';
import { Link } from 'react-router-dom';

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswerIndex: number;
}

interface QuestionProps {
  id: number;
  text: string;
  options: string[];
  onAnswer: (index: number) => void;
}

const Question: React.FC<QuestionProps> = ({ id, text, options, onAnswer }) => {
  return (
    <div className='Question'>
      <h2>{text}</h2>

      <div className='AnswerOption'>
        {options.map((option, index) => (
          <Answer key={index} text={option} onClick={() => onAnswer(index)} />
        ))}
      </div>
      

      <div>
        <Link to='/Auth/'>Домой</Link>
      </div>
      
    </div>
  );
};

export {Question};
