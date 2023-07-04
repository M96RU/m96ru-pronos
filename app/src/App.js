import {Component} from 'react';
import Profile from "./components/Profile";
import Matches from "./components/Matches";

import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Profile/>
                    <Matches/>
                </header>
            </div>
        )
    }
}

export default App;
