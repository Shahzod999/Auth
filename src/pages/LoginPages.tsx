import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from '../components/Login'


interface LoginPagesProps{

}

const LoginPages: React.FC<LoginPagesProps> = () => {
  return (
    <div className='login'>
      <h1>Login</h1>
      <div>
        <Login/>
      </div>
      <p>
        Or <Link to="/Auth/register">register</Link>
      </p>

    </div>
  )
}

export default LoginPages