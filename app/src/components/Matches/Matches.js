import {Component} from 'react';
import getMatches from '../../helpers/fetch'
import Match from "../Match";

import './Matches.css'

class Matches extends Component {
    state = {data: []}

    componentDidMount = async () => {
        const data = this.state
        const update = await getMatches()

        if (data !== update) {
            return this.setState({data: update})
        }
    }

    render() {
        const {data} = this.state

        return (
            <div>
                {
                    data.map((match, index) => (
                        <Match key={index} match={match} />
                    ))
                }
            </div>
        );
    }
}

export default Matches;