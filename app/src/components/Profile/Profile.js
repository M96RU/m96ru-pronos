import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import LoginButton from "../../LoginButton";
import LogoutButton from "../../LogoutButton";

import './Profile.css'

const Profile = () => {
    const {user, isAuthenticated, isLoading} = useAuth0()

    if (isAuthenticated) {
        return <div>
            <h2>{user.name} <LogoutButton/></h2>
        </div>
    }

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return <LoginButton/>

}

export default Profile