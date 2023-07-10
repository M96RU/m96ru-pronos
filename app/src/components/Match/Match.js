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
            h2h_1: PropTypes.number,
            h2h_x: PropTypes.number,
            h2h_2: PropTypes.number,
        }).isRequired,
        selectOdd: PropTypes.func.isRequired
    }

    render = () => {
        const {match, selectOdd} = this.props

        return (
            <div className="Match">
                <div className="Date">{new Date(match.begin).toLocaleString('fr')}</div>
                <div className="Teams">{match.home} - {match.away}</div>
                <div className="Odds">
                    <span className="Odd" onClick={() => selectOdd(match, "h2h_1")}>{match.h2h_1.toPrecision(3)}</span>
                    <span className="Odd" onClick={() => selectOdd(match, "h2h_x")}>{match.h2h_x.toPrecision(3)}</span>
                    <span className="Odd" onClick={() => selectOdd(match, "h2h_2")}>{match.h2h_2.toPrecision(3)}</span>
                </div>
            </div>
        )
    }

}

export default Match