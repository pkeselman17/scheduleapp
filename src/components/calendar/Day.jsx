import React, { Component } from 'react';

class Day extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: null
        }

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseExit = this.handleMouseExit.bind(this);
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

    render() {
        return (
            <td onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseExit}
                className={this.state.hover ? "day active" : "day"}>
                {this.props.day}
            </td>
        );
    }
}

export default Day;