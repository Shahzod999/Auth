// src/components/QuestionList.tsx
import React from 'react';
import { Question } from './Question';

interface QuestionListProps {
  questions: Question[];
  currentQuestionIndex: number;
  onAnswer: (index: number) => void;
}

const QuestionList: React.FC<QuestionListProps> = ({ questions, currentQuestionIndex, onAnswer }) => {
  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return <div>
        <h1>Вопросы закончились</h1>
    </div>;
  }

  return <Question {...currentQuestion} onAnswer={onAnswer} />;
};

export default QuestionList;
