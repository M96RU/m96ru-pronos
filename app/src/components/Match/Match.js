import PropTypes from "prop-types";
import {Component} from "react";

import './Match.css'

class Match extends Component {

    static propTypes = {
        match: PropTypes.shape({
            id: PropTypes.string.isRequired,
            begin: PropTypes.string.isRequired,
            home: PropTypes.string.isRequired,
            away: PropTypes.string.isRequired,
            h2h: PropTypes.bool.isRequired,
            h2h_1: PropTypes.number,
            h2h_X: PropTypes.number,
            h2h_2: PropTypes.number,
        }).isRequired
    }

    render = () => {
        const {match} = this.props

        if (match.h2h) {
            return (
                <div className="Match">
                    <div className="Date">{new Date(match.begin).toLocaleString('fr')}</div>
                    <div className="Teams">{match.home} - {match.away}</div>
                    <div className="Odds">
                        <span className="Odd">{match.h2h_1.toPrecision(3)}</span>
                        <span className="Odd">{match.h2h_X.toPrecision(3)}</span>
                        <span className="Odd">{match.h2h_2.toPrecision(3)}</span>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="Match">
                    <div className="Date">{new Date(match.begin).toLocaleString('fr')}</div>
                    <div className="Teams">{match.home} - {match.away}</div>
                </div>
            )
        }
    }

}

export default Match