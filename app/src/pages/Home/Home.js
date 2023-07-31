import React from "react";
import Profile from "../../components/Profile";
import Matches from "../../components/Matches";
import {useAuth0} from '@auth0/auth0-react';

import './Home.css'

const Home = () => {
    const {user} = useAuth0();
    if (user) {
        return (
            <div>
                <Profile/>
                <Matches key='logged' userId={user.sub}/>
            </div>
        );
    } else {
        return (
            <div>
                <Profile/>
                <Matches key='anonymous'/>
            </div>
        );
    }

};

export default Home
