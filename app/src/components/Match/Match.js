import PropTypes from "prop-types";
import {Component} from "react";

import './Match.css'

class Match extends Component {

    static propTypes = {
        match: PropTypes.shape({
            id: PropTypes.string.isRequired,
            begin: PropTypes.instanceOf(Date),
            home: PropTypes.string.isRequired,
            away: PropTypes.string.isRequired,
            h2h: PropTypes.bool.isRequired,
            h2h_1: PropTypes.string,
            h2h_X: PropTypes.string,
            h2h_2: PropTypes.string,
        }).isRequired
    }

    render = () => {
        const {match} = this.props

        if (match.h2h) {
            return (
                <div className="Match">
                    <p>{match.begin}: {match.home} - {match.away}</p>
                    <p>{match.h2h_1} - {match.h2h_X} - {match.h2h_2}</p>
                </div>
            )
        } else {
            return (
                <div className="Match">
                    <p>{match.begin}: {match.home} - {match.away}</p>
                </div>
            )
        }
    }

}

export default Match;