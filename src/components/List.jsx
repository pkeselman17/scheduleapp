import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {event: state.events};
}

const ConnectedList = ({events}) => (
    <ul className="list-group list-group-flush">
        {events.map(el => (
            <li className="list-group-item" key={el.id}>
                {el.title}
            </li>
        ))}
    </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;