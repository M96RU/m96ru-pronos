import './App.css';
import Matches from './Matches'
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Matches/>

                <BottomNavigation>
                    <BottomNavigationAction label="Recents" icon={<RestoreIcon/>}/>
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>}/>
                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon/>}/>
                </BottomNavigation>
            </header>
        </div>
    );
}

export default App;
