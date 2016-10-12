import React from "react";
import Crypto from "crypto";
import BBuffer from "buffer";

const Buffer = BBuffer.Buffer;

export default class Hash extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hash: 'foobar'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({hash: event.target.value});
    }

    render() {
        return <section className="widget">
            <h2>Hashes</h2>

            <form className="form-horizontal">
                <div className="form-group">
                    <label className="col-sm-1 control-label">String</label>
                    <div className="col-sm-11">
                        <input className="form-control" type="text" value={this.state.hash} onChange={this.handleChange}/>
                    </div>
                </div>
            </form>

            <table className="table table-striped table-bordered">
                <tbody>
                <tr>
                    <th>MD5</th>
                    <td>{Crypto.createHash("md5").update(this.state.hash).digest('hex')}</td>
                </tr>
                <tr>
                    <th>SHA1</th>
                    <td>{Crypto.createHash("sha1").update(this.state.hash).digest("hex")}</td>
                </tr>
                <tr>
                    <th>Base64</th>
                    <td>{Buffer.from(this.state.hash).toString('base64')}</td>
                </tr>
                <tr>
                    <th>SHA224</th>
                    <td>{Crypto.createHash("sha224").update(this.state.hash).digest("hex")}</td>
                </tr>
                <tr>
                    <th>SHA256</th>
                    <td>{Crypto.createHash("sha256").update(this.state.hash).digest("hex")}</td>
                </tr>
                <tr>
                    <th>SHA384</th>
                    <td>{Crypto.createHash("sha384").update(this.state.hash).digest("hex")}</td>
                </tr>
                <tr>
                    <th>SHA512</th>
                    <td>{Crypto.createHash("sha512").update(this.state.hash).digest("hex")}</td>
                </tr>
                <tr>
                    <th>RMD160</th>
                    <td>{Crypto.createHash("rmd160").update(this.state.hash).digest("hex")}</td>
                </tr>
                </tbody>
            </table>
        </section>;
    }

}