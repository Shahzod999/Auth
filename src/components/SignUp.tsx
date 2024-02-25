import { useNavigate, NavigateFunction } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form";
import { setUser } from "../store/slices/userSlice";
import { useAppDispatch } from "../hooks/redux-hooks";

interface SignUpProps{}

const SignUp: React.FC<SignUpProps> = () => {
    const dispatch = useAppDispatch();
    const navigate: NavigateFunction = useNavigate();

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate('/Auth/');
            })
            .catch(() => alert('Проверьте email и пароль должен содержать 6 символов'))
    }

    return(
        <Form 
            title="register"
            handleClick={handleRegister}
        />
    )
}

export {SignUp}