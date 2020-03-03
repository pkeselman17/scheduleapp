import React, { Component } from 'react';
import { connect } from 'react-redux';
import {toggleModal} from '../../actions/index'

const mapStateToProps = state => {
    return {
        today: state.day,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleModal: () => dispatch(toggleModal()),
    }
}

class Day extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: null
        }

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseExit = this.handleMouseExit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleMouseOver = () => {
        this.setState({
            hover: true,
        });
    }

    handleMouseExit = () => {
        this.setState({
            hover: false,
        });
    }

    handleClick = () => {
        this.props.toggleModal();
    }

    render() {
        return (
            <td onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseExit} onClick={this.handleClick}
                className={this.state.hover || this.props.day === this.props.today ? "day active" : "day"}>
                <span>{this.props.day}</span>
            </td>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Day);