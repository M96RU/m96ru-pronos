import PropTypes from "prop-types";
import {Component} from "react";

import './Match.css'
import Outcome from "../Outcome";

class Match extends Component {

    static propTypes = {
        match: PropTypes.shape({
            id: PropTypes.string.isRequired,
            commence_time: PropTypes.instanceOf(Date),
            home_team: PropTypes.string.isRequired,
            away_team: PropTypes.string.isRequired,
            bookmakers: PropTypes.arrayOf(
                PropTypes.shape({
                    key: PropTypes.string.isRequired,
                    markets: PropTypes.arrayOf(
                        PropTypes.shape({
                            key: PropTypes.string.isRequired,
                            outcomes:  PropTypes.arrayOf(
                                PropTypes.shape({
                                    name: PropTypes.string.isRequired,
                                    price: PropTypes.string.isRequired,
                                })
                            )
                        })
                    )
                })
            )
        }).isRequired
    }

    render = () => {
        const {match} = this.props

        const unibet = match.bookmakers.find((bookmaker) => bookmaker.key === 'unibet_eu')

        if (unibet) {
            const h2h = unibet.markets.find((market) => market.key === 'h2h')

            if (h2h) {
                console.log(h2h)
                return (
                    <div className="Match">
                        <p>{match.commence_time}: {match.home_team} - {match.away_team}</p>
                        <p>
                            {h2h.outcomes.map((outcome) => <Outcome outcome={outcome} />)}
                        </p>
                    </div>
                )
            }
        }



    }

}

export default Match;