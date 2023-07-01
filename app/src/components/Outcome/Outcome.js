import {Component} from "react";

import './Outcome.css'
import PropTypes from "prop-types";


class Outcome extends Component {

    static propTypes = {
        outcome: PropTypes.shape({
            name: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
        }).isRequired
    }

    render = () => {
        const {outcome} = this.props

        return (
            <div className="Outcome">
                <p>{outcome.name}: {outcome.price}</p>
            </div>
        )
    }
}

export default Outcome;
