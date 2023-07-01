import PropTypes from "prop-types";
import {Component} from "react";

import './Match.css'

class Match extends Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        home: PropTypes.string.isRequired,
        away: PropTypes.string.isRequired,
    }

    render = () => {
        const {home, away} = this.props

        return (
            <div className="Match">
                {home} vs {away}
            </div>
        )
    }

}

export default Match;