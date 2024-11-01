import { useRef, useState } from "react";
import { useStateContext } from "../context/ContextProvider.jsx";
import { Link, useNavigate } from "react-router-dom";
import AxiosClient from "../AxiosClient.js";

export default function Register() {

    const loginRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()

    const [errors, setErrors] = useState(null)

    const { addUser, setUser, setToken, users, user } = useStateContext()

    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault()
        // const generatedToken = Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
        // setToken(generatedToken);
        if (loginRef.current.value !== "" && passwordRef.current.value !== "" && passwordRef.current.value === passwordConfirmationRef.current.value) {

            const payload = {
                name: loginRef.current.value,
                password: passwordRef.current.value,
            };

            AxiosClient.post('/register', payload)
                .then(({ data }) => {
                    setToken(data.token);
                    navigate("/home");
                })
                .catch(error => {
                    setErrors({ login: ["User already exists"] });
                });

        } else setErrors({ login: ["There is something wrong"] });

    }

    return (
        <div className='login-signup-form animated fadeInDown'>
            <div className='form'>
                <form onSubmit={onSubmit}>
                    <h1 className='title'>
                        You can create new User!
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
                    <input ref={passwordConfirmationRef} type='password' placeholder='Password Confirmation' />
                    <button className='btn btn-block'>Register</button>
                </form>
            </div>
            <Link to="/login" className='text-center'>Have already an account?</Link>
        </div>
    )
}
