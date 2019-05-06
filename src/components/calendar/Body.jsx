import React, { Component } from "react";
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { nextMonth, lastMonth } from "../../actions/index";
import MONTHS from './constants';
import Day from "./Day";

const mapStateToProps = state => {
    return {
        day: state.day,
        year: state.year,
        month: state.month
    };
}

const mapDispatchToProps = dispatch => {
    return {
        nextMonth: (month) => dispatch(nextMonth(month)),
        lastMonth: (month) => dispatch(lastMonth(month))
    }
}

class CalendarBody extends Component {
    constructor() {
        super();

        this.handleNextMonth = this.handleNextMonth.bind(this);
        this.handleLastMonth = this.handleLastMonth.bind(this);
    }

    handleNextMonth = () => {
        this.props.nextMonth(this.props.month);
    }

    handleLastMonth = () => {
        this.props.lastMonth(this.props.month);
    }

    createCalendar = () => {
        let date = 1;
        let rows = [];
        const firstDay = new Date(this.props.year, this.props.month).getDay();
        const daysInMonth = this.getDaysInMonth();

        for (let i = 0; i < 6; i++) {
            let days = []

            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    days.push(<Day key={uuidv1()} day={null} />);
                }
                else if (date > daysInMonth) {
                    break;
                }
                else {
                    days.push(<Day key={uuidv1()} day={date} />);
                    date++;
                }
            }

            rows.push(<tr key={uuidv1()}>{days}</tr>);
        }
        return rows;
    }

    getDaysInMonth = () => {
        return 32 - new Date(this.props.year, this.props.month, 32).getDate();
    }

    render() {
        return (
            <div>
                <h2>{MONTHS[this.props.month]} {this.props.year}</h2>
                <button onClick={this.handleLastMonth}>Last Month</button>
                <button onClick={this.handleNextMonth}>Next Month</button>
                <table className="calendar-container">
                    <thead>
                        <tr>
                            <th>Sunday</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.createCalendar()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarBody);