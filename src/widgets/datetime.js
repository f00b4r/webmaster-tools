import React from "react";
import Moment from "moment";

const moment = Moment();

export default class Datetime extends React.Component {
    render() {
        return <section className="widget">
            <h2>Datetime</h2>
            <Date/>
            <Time/>
            <Timestamp/>
        </section>;
    }

}
class Date extends React.Component {
    render() {
        return <table className="table table-striped table-bordered">
            <tbody>
            <tr>
                <th>Date</th>
                <td>{moment.format('d.M.Y')}</td>
            </tr>
            <tr>
                <th>Day</th>
                <td>{moment.format('d')}</td>
            </tr>
            <tr>
                <th>Month</th>
                <td>{moment.format('M')}</td>
            </tr>
            <tr>
                <th>Year</th>
                <td>{moment.format('Y')}</td>
            </tr>
            </tbody>
        </table>;
    }
}

class Time extends React.Component {
    render() {
        return <table className="table table-striped table-bordered">
            <tbody>
            <tr>
                <th>Time</th>
                <td>{moment.format('H:m:s')}</td>
            </tr>
            <tr>
                <th>Seconds</th>
                <td>{moment.format('s')}</td>
            </tr>
            <tr>
                <th>Minutes</th>
                <td>{moment.format('m')}</td>
            </tr>
            <tr>
                <th>Hours</th>
                <td>{moment.format('H')}</td>
            </tr>
            </tbody>
        </table>;
    }
}

class Timestamp extends React.Component {
    render() {
        return <table className="table table-striped table-bordered">
            <tbody>
            <tr>
                <th>Unix(ms)</th>
                <td>{moment.format('X')}</td>
            </tr>
            <tr>
                <th>Unix</th>
                <td>{moment.format('x')}</td>
            </tr>
            </tbody>
        </table>;
    }
}