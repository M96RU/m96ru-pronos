import './App.css';
import Profile from "./Profile";
import Matches from "./Matches";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Profile/>
                <Matches/>
            </header>
        </div>
    );
}

export default App;
