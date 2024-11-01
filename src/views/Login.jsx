import { useRef, useState } from "react";
import { useStateContext } from "../context/ContextProvider.jsx";
import { Link, useNavigate } from "react-router-dom";
import AxiosClient from "../AxiosClient.js";

export default function Login() {
    const loginRef = useRef()
    const passwordRef = useRef()

    const [errors, setErrors] = useState(null)

    const { users, setUser, setToken } = useStateContext()

    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault()
        // const generatedToken = Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2); // Simulate token generation for a new user
        // setToken(generatedToken);

        const payload = {
            name: loginRef.current.value,
            password: passwordRef.current.value,
        };

        AxiosClient.post('/login', payload)
            .then(({ data }) => {
                setToken(data.token);
                navigate("/home");
            })
            .catch(() => {
                setErrors({ login: ["Invalid credentials"] });
            });
            
    }

    return (
        <div className='login-signup-form animated fadeInDown'>
            <div className='form'>
                <form onSubmit={onSubmit}>
                    <h1 className='title'>
                        Hello there!
                    </h1>
                    {
                        errors &&
                        <div className='alert'>
                            {
                                Object.keys(errors).map(
                                    key => (
                                        <p key={key}>{errors[key][0]}</p>
                                    )
                                )
                            }
                        </div>
                    }
                    <input ref={loginRef} type='text' placeholder='Login' />
                    <input ref={passwordRef} type='password' placeholder='Password' />
                    <button className='btn btn-block'>Login</button>
                </form>
            </div>
            <Link to="/register" className='text-center'>Don't have an account?</Link>
        </div>
    )
}
