import React, {Component} from 'react';
import {getMatches, sendBet} from '../../helpers/fetch'
import Match from "../Match";

import './Matches.css'
import PropTypes from "prop-types";

class Matches extends Component {

    static propTypes = {
        userId: PropTypes.string,
    }

    state = {
        data: []
    }

    componentDidMount = async () => {
        const {userId} = this.props;
        const update = await getMatches(userId);
        this.setState({
            data: update
        })
    }

    _userChoice = (match, choice) => {
        const {userId} = this.props;
        const response = sendBet(userId, match, choice)
            .catch(error => console.error('Odd not send to the back'))
            .then(response => this.componentDidMount());
    }

    render() {

        const {data} = this.state

        if (!data.length) {
            return (
                <img src="https://i.gifer.com/ZZ5H.gif" alt="Loading matches..."/>
            )
        }

        return (
            <div>
                {
                    data.map((match, index) => (
                        <Match userChoice={this._userChoice} key={index} match={match}/>
                    ))
                }
            </div>
        );
    }
}

export default Matches