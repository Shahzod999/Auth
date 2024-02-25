import React from 'react'
import { Link } from 'react-router-dom'
import { SignUp } from '../components/SignUp'


interface RegisterProps{

}

const Register: React.FC<RegisterProps> = () => {
  return (
    <div className='register'>
      <h1>Register</h1>
        <SignUp/>
      <p>
        Alreadyhave an accaunt? <Link to="/Auth/login">Sign in</Link>
      </p>


    </div>
  )
}

export default Register