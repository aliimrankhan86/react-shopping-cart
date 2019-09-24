import React from "react";
import Total from "./Total";


export default class Bill extends React.Component {
    render() {
        if (this.props.summary.length > 0) {
            let total = 0;
            let summary = this.props.summary.map(item => {
                total += item.price;
                return (
                    <div key={item.order} className="summary">
                        <h4>Fish Name: {item.fishname}</h4>
                        <p>
                            Order No: {item.order} <br />
                            <span>Price: {item.price}</span>
                        </p>
                    </div>
                );
            })
            let final = <h2>Final bill is {total}</h2>
            return (
                <div>
                    <h1>Bill Summary</h1>
                    {summary}
                    {final}
                </div>
            );
        }
        else {
            return (
                <div>
                    <h1>Bill Summary</h1>
                </div>
            );
        }
    }
}