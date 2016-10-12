import React from "react";
import Datetime from "./widgets/datetime";
import Hash from "./widgets/hash";
import Password from "./widgets/password";

export default class Widgets extends React.Component {
    render() {
        return <section className="row widgets">
            <div className="col-md-6"><Password/></div>
            <div className="col-md-6"><Datetime/></div>
            <div className="col-md-12"><Hash/></div>
        </section>;
    }
}