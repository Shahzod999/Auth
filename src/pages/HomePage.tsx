import React from 'react'
import {Link, Navigate, useNavigate, NavigateFunction } from 'react-router-dom';

interface HomePageProps{

}

const HomePage: React.FC<HomePageProps> = () => {
  const storedUser = sessionStorage.getItem('user');
  const navigate: NavigateFunction = useNavigate();


  return storedUser ? (
      <div className='HomePage'>
        <h1>Welcome</h1>

        <p>Вы должны ответить на вопросы по физике</p>
        
        <div className='Test'>
          <Link to="/Auth/test">Start <br /> test</Link>
        </div>
        
        <button className="btn third2" onClick={()=>{sessionStorage.removeItem('user'); navigate('/Auth/');}}>
          Log out
        </button>
      </div>
    ) : (<Navigate to="/Auth/login" />);
};

export default HomePage