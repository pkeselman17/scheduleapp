import  React, {Component} from "react";
import CalendarBody from "./calendar/Body";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { apiResponse: "" };
    }

    callApi() {
        fetch("http://localhost:9000/api/testApi")
        .then(res => res.text())
        .then(res => this.setState({apiResponse: res}))
        .catch(err => err);
    }

    componentDidMount() {
        this.callApi();
    }

    render() {
        return (
            <div>
                <h1>Calendar</h1>
                <h2>{this.state.apiResponse}</h2>
                <div className="row mt-5">
                    <div className="col-md-12">
                        <CalendarBody />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;