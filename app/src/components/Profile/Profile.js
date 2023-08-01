import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

import './Profile.css'


const Profile = () => {
    const {user, isAuthenticated, isLoading, loginWithRedirect, logout} = useAuth0()

    if (isAuthenticated) {
        console.log(user);
        return <div>
            <h2>{user.name} <LogoutIcon className="Logout" onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}/></h2>
        </div>
    }

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <div className="Login" onClick={() => loginWithRedirect()}>
            Login <LoginIcon/>
        </div>
    )

}

export default Profile