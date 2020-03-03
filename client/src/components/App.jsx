import React from "react";
import CalendarBody from "./calendar/Body";

const App = () => (
    <div>
        <h1>Calendar</h1>
        <div className="row mt-5">
            <div className="col-md-12">
                <CalendarBody />
            </div>
        </div>
    </div>
);

export default App;