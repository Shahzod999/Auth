import { FC } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form";
import { setUser } from "../store/slices/userSlice";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux-hooks";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
    const dispatch = useAppDispatch();
    const navigate: NavigateFunction = useNavigate();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                sessionStorage.setItem('user', JSON.stringify({
                    email: !!user.email,
                    name: user.email,
                }));
                navigate('/Auth/');
            })
            .catch(() => alert("Неправильный пароль или логин"))
    }

    return(
        <Form
            title="sign in"
            handleClick={handleLogin}
        />
    )
}

export { Login }