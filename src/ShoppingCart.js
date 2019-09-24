import React from "react";
import Inventory from "./Inventory";
import OrderList from "./OrderList";
import Bill from "./Bill";

export default class ShoppingCart extends React.Component {
    render() {
        return (
            <div>
                <div className="left">
                    <OrderList order={this.props.orders} bill={this.props.bill} />
                </div>
                <div className="middle">
                    <Bill summary={this.props.summary} />
                </div>
                <div className="right">
                    <Inventory additem={this.props.additem} />
                </div>

            </div>
        );
    }
}