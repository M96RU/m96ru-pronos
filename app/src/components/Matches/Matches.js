import {Component} from 'react';
import getMatches from '../../helpers/fetch'
import Match from "../Match";

import './Matches.css'

class Matches extends Component {
    state = {data: []}

    componentDidMount = async () => {
        const update = await getMatches()
        return this.setState({data: update})
    }

    _selectOdd = (match, odd) => {
        match.selected = odd
        console.log(match);
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
                        <Match selectOdd={this._selectOdd} key={index} match={match}/>
                    ))
                }
            </div>
        );
    }
}

export default Matches