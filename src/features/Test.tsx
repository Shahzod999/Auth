// src/features/Test.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { answerQuestion, resetTest } from '../store/slices/TestSlice';
import QuestionList from '../components/QuestionList';

const Test: React.FC = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, userAnswers } = useSelector((state: RootState) => state.test);

  const handleAnswer = (index: number) => {
    dispatch(answerQuestion(index));
  };

  const handleReset = () => {
    dispatch(resetTest());
  };

  return (
    <div>
      <QuestionList questions={questions} currentQuestionIndex={currentQuestionIndex} onAnswer={handleAnswer} />
      {currentQuestionIndex === questions.length && (
        <div className='finish'>
          <h2>Тест завершен!</h2>
          <p>Правильных Ответов: {userAnswers.filter((answer, index) => answer === questions[index].correctAnswerIndex).length}</p>
          <button className='AnswerBtn btn1 hover-filled-slide-right' onClick={handleReset}><span>Начать заново</span></button>
        </div>
      )}
    </div>
  );
};

export default Test;
