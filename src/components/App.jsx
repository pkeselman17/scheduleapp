import React from "react";
import List from "./List";
import Form from "./Form";
import CalendarBody from "./calendar/Body";

const App = () => (
    <div>
        <h1>Calendar</h1>
        <div className="row mt-5">
            <div className="col-md-12 offset-md-1">
                <CalendarBody />
            </div>
        </div>
    </div>
);

export default App;