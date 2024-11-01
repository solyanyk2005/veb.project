import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider.jsx";
export default function GuestLayout() {

    const { token, users } = useStateContext()

    // if (token) {
    //     return <Navigate to="/home" />
    // }

    return (
        <div id="guestLayout">
            <h2 content={users ?? ""} />
            <Outlet />
        </div>
    )
}
