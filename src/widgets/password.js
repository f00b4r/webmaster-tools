import React from "react";
import Randomstring from "randomstring";

class PasswordItem extends React.Component {
    render() {
        const hash = Randomstring.generate({
            length: this.props.pw.length,
            charset: this.props.pw.charset
        });

        return <tr>
            <th>Password #{this.props.n}</th>
            <td>{hash}</td>
        </tr>;
    }
}

export default class Password extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            length: 30,
            charset: 'alphanumeric'
        };

        this.handleCharsetChange = this.handleCharsetChange.bind(this);
        this.handleLengthChange = this.handleLengthChange.bind(this);
    }

    handleCharsetChange(event) {
        if (event.target.value == 'special') {
            const numbers = '0123456789';
            const charsLower = 'abcdefghijklmnopqrstuvwxyz';
            const charsUpper = charsLower.toUpperCase();
            const special = '!@#$%^&*()_-=[];,./';

            const charset = numbers + charsLower + charsUpper + special;

            this.setState({charset: charset, charsetValue: event.target.value});
        } else {
            this.setState({charset: event.target.value, charsetValue: event.target.value});
        }
    }

    handleLengthChange(event) {
        if (event.target.value > 0) {
            this.setState({length: event.target.value});
        }
    }

    render() {
        const self = this;
        return <section className="widget">
            <h2>Passwords</h2>

            <form className="form-horizontal">
                <div className="form-group">
                    <label className="col-sm-2 control-label">Length</label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               type="number"
                               value={this.state.length}
                               onChange={this.handleLengthChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Charset</label>
                    <div className="col-sm-10">
                        <select className="form-control"
                                type="text"
                                value={this.state.charsetValue}
                                onChange={this.handleCharsetChange}
                        >
                            <option value="alphanumeric">Alphanumeric</option>
                            <option value="alphabetic">Alphabetic</option>
                            <option value="numeric">Numeric</option>
                            <option value="hex">Hex</option>
                            <option value="special">Special</option>
                        </select>
                    </div>
                </div>
            </form>

            <table className="table table-striped table-bordered">
                <tbody>
                {Array.from({length: 10}, (v, k) => k + 1).map(function (n) {
                    return <PasswordItem key={n} n={n} pw={self.state}/>;
                })}
                </tbody>
            </table>
        </section>;
    }
}