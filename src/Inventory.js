import React from "react";

export default class Inventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fishname: "",
            price: 0,
            stock: "Fresh!",
            description: "",
            image: ""
        }
    }


    fishname = (e) => {
        this.setState({
            fishname: e.target.value
        })
    }

    price = (e) => {
        this.setState({
            price: e.target.value
        })
    }

    stock = (e) => {
        this.setState({
            stock: e.target.value
        })
    }

    description = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    image = (e) => {
        this.setState({
            image: e.target.value
        })
    }

    onAddClick = (e) => {
        e.preventDefault();
        const obj = {
            fishname: this.state.fishname,
            price: this.state.price,
            stock: this.state.stock,
            description: this.state.description,
            image: this.state.image
        }
        this.props.additem(obj);
        this.setState({
            fishname: "",
            price: 0,
            stock: "Fresh!",
            description: "",
            image: ""
        })
    }

    render() {
        return (
            <div className="inventory">
                <h1>Inventory</h1>
                <form id="form" onSubmit={this.onAddClick}>
                    <input type="text" placeholder="fishname" onChange={this.fishname} value={this.state.fishname} />
                    <input type="number" placeholder="Price" onChange={this.price} value={this.state.price} />
                    <select onChange={this.stock}>
                        <option>Fresh!</option>
                        <option>Sold Out</option>
                    </select>
                    <input type="text" placeholder="description" onChange={this.description} value={this.state.description} />
                    <input type="text" placeholder="Image" onChange={this.image} value={this.state.image} />
                    <input type="submit" value="Add item" />
                </form>
            </div>
        );
    }
}