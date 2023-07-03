import './App.css';
import Profile from "./components/Profile";
import Matches from "./components/Matches";

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
