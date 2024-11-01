import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider.jsx";
import { useEffect } from "react";

export default function DefaultLayout() {

    const { user, token, notification, setUser, setToken } = useStateContext()

    const navigate = useNavigate();



    const onLogout = (event) => {
        event.preventDefault()
        navigate("/login")
    }

    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/help">Help</Link>
            </aside>
            <div className="content">
                <header>
                    <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
                        <img src="/hippopotamus.png" className="logo" alt="HipoFix Logo" style={{ height: "50pt", width: "50pt" }} />
                        <h1 style={{ color: '#d7a8a9', textShadow: "-1px 1px 1px black" }}>HipoFix</h1>
                    </div>
                    <div className="div">
                        {/* <a className='text-center'>{user.name}</a> */}
                        <a onClick={onLogout} className='btn-logout'>Logout</a>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
            {notification &&
                <div className="notification">
                    {notification}
                </div>
            }

        </div>
    )
}
