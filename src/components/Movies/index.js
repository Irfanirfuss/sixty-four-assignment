import { Component } from "react";
import Cards from "../Cards";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import "./index.css";
const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

class Movies extends Component {
    state = { date: new Date() };

    componentDidMount() {
        setInterval(() => {
            this.setState({ date: new Date() });
        }, 1000);
    }

    render() {
        const { date } = this.state;
        return (
            <div className="main">
                <header>
                    <div>
                        <h5>Irfan</h5>
                        <p className="decs">you subscribed to retail plan</p>
                    </div>
                    <div className="date-container">
                        <p>
                            <FaCalendarAlt className="clock" />
                        </p>
                        <p>
                            {" "}
                            Today, {date.getDay()} {month[date.getMonth()]} {}
                        </p>

                        <p>
                            {" "}
                            <FaRegClock className="cl" />{" "}
                        </p>
                        <p>
                            {date.getHours()} : {date.getMinutes()}
                        </p>
                        <p>
                            <FaBell className="cl" />
                        </p>
                    </div>
                </header>
                <ul className="saved">
                    <li>
                        <FaFileAlt color="cyan" size={25} />
                        <h3>Saved Librabry1</h3>
                        <p>13-5-2018</p>
                    </li>
                    <li>
                        <FaFileAlt color="purple" size={25} />
                        <h3>Saved Librabry2</h3>
                        <p>2-1-2024</p>
                    </li>
                    <li>
                        <FaFileAlt color="red" size={25} />
                        <h3>Saved Librabry3</h3>
                        <p>9-7-2023</p>
                    </li>
                    <li>
                        <FaFileAlt color="orange" size={25} />
                        <h3>Saved Librabry4</h3>
                        <p>3-6-2021</p>
                    </li>
                    <li>
                        <FaFileAlt color="green" size={25} />
                        <h3>Saved Librabry5</h3>
                        <p>2-4-2021</p>
                    </li>
                </ul>
                <div className="card">
                    <Cards />
                </div>
            </div>
        );
    }
}

export default Movies;
