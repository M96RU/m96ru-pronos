import {Component} from 'react';
import getMatches from './helpers/fetch'

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
                    data.map(({id, home_team, away_team}) => (
                        <p key={{id}}>{home_team} - {away_team}</p>
                    ))
                }
            </div>
        );
    }
}

export default Matches;