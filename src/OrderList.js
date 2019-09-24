import React from "react";

export default class OrderList extends React.Component {
    constructor(props) {
        super(props);
    }

    onClickBill = (e) => {
        const summary = {
            order: e.target.parentElement.childNodes[0].childNodes[1].nodeValue,
            fishname: e.target.parentElement.childNodes[1].childNodes[1].nodeValue,
            price: parseInt(e.target.parentElement.childNodes[2].childNodes[1].nodeValue)
        }
        console.log(summary)
        this.props.bill(summary)
    }

    render() {
        const data = this.props.order.map((item, index) => {
            return (
                <div key={index + 1} className="order">
                    <h4>Order No: {index + 1}</h4>
                    <p>Fishname is {item.fishname.toUpperCase()}</p>
                    <p>Price is {item.price}</p>
                    <p>Stock is {item.stock}</p>
                    <p>Description is {item.description}</p>
                    <p>Image is {item.image}</p>
                    <button className="addtoorder" onClick={this.onClickBill}>Add To Order</button>
                </div>
            )
        })


        return (
            <div>
                <h1>Order List</h1>
                {data}
            </div>
        );
    }
}