import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswerIndex: number;
}

interface TestState {
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: number[];
}

const initialState: TestState = {
  questions: [
    {
      id: 1,
      text: 'Что значит измерить физическую величину?',
      options: ['Выразить её в системе СИ', 'Сравнить её с однородной величиной, принятой за единицу', 'Определить её с помощью прибора', 'Узнать во сколько раз она больше другой величины'],
      correctAnswerIndex: 1,
    },
    {
      id: 2,
      text: 'Назовите форму существования объектов в природе:',
      options: ['Силы притяжения уравновешиваются силами отталкивания', 'Заметнее проявляются силы притяжения между молекулами', 'Заметнее проявляются силы отталкивания между молекулами', 'Молекулы не взаимодействуют друг с другом'],
      correctAnswerIndex: 0,
    },
    {
      id: 3,
      text: 'В твердых телах молекулы расположены так, что',
      options: ['Уравнении Стокса', 'Уравнении Бернулли', 'Законе сообщающихся сосудов', 'Втором законе Ньютона'],
      correctAnswerIndex: 2,
    },
    {
      id: 4,
      text: 'Молекулы одного вещества при соприкосновении могут проникать в межмолекулярные промежутки другого вещества, т.е. происходит',
      options: ['Броуновское движение', 'Коррозия', 'Диффузия', 'Магнезия'],
      correctAnswerIndex: 2,
    },
    {
      id: 5,
      text: 'Для измерения малых давлений используют:',
      options: ['Однотрубный манометр', 'Пружинный манометр', 'Микроманометр', 'Двухтрубный манометр'],
      correctAnswerIndex: 2,
    },
  ],
  currentQuestionIndex: 0,
  userAnswers: [],
};

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    answerQuestion(state, action: PayloadAction<number>) {
      state.userAnswers[state.currentQuestionIndex] = action.payload;
      state.currentQuestionIndex += 1;
    },
    resetTest(state) {
      state.currentQuestionIndex = 0;
      state.userAnswers = [];
    },
  },
});

export const { answerQuestion, resetTest } = testSlice.actions;
export default testSlice.reducer;
