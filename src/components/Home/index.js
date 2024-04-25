import { Component } from "react";
import Movies from "../Movies";
import Sidebar from "../Sidebar";
import "./index.css";

class Home extends Component {
    render() {
        return (
            <div className="main-container">
                <Sidebar />
                <Movies />
            </div>
        );
    }
}

export default Home;
