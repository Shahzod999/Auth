import { FC, useState } from "react";

interface FormProps {
    title: string;
    handleClick: (email: string, pass: string) => void;
  }
  

const Form: FC<FormProps> =({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] =useState('');

    return(
        <div className="form">
            <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <input 
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="password"
            />
            <button className="btn third" onClick={() => handleClick(email, pass)}>
                {title}
            </button>
        </div>
    )
}

export {Form}