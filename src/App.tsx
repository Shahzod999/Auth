import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPages from './pages/LoginPages';
import Register from './pages/Register';
import Test from './features/Test';


const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/Auth/' element={<HomePage />} />
      <Route path='/Auth/login' element={<LoginPages />} />
      <Route path='/Auth/register' element={<Register />} />
      <Route path='/Auth/test' element={<Test/>}/>
    </Routes>
  );
}

export default App;