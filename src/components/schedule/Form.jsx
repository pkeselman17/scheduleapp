import React, { Component } from 'react'
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import { connect } from 'react-redux';

// const mapStateToProps = state => {
//     return {
//         time: []
//     }
// }

class PlanForm extends Component {
    constructor() {
        super();

        this.state = {
            time: this.createTime()
        }

        this.handleChange = this.handleChange.bind(this);
    }

    createTime = () => {
        const now = new Date();
        const nowTime = '' + new Date().getHours() + ':' + new Date().getMinutes();

        const later = new Date(new Date().setMinutes(now.getMinutes() + 30));
        const laterTime = '' + later.getHours() + ':' + later.getMinutes();

        const time = [nowTime, laterTime];
        return time;
    }

    handleChange = time => {
        this.setState({time});
    }

    render() {
        return (
            <form>
                <label htmlFor="event">Event</label>
                <input type="text" name="event" />

                <label htmlFor="timerange">Time</label>
                <TimeRangePicker
                    name="timerange"
                    onChange={this.handleChange}
                    value={this.state.time} />

            </form>
        )
    }
}

export default PlanForm;