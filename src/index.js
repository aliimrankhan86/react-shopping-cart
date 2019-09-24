import React from "react";
import ReactDOM from "react-dom";
import ShoppingCart from "./ShoppingCart";

import "./styles.css";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderItem: [],
      bill: []
    }
  }

  OnAddItem = (obj) => {
    const data = [...this.state.orderItem];
    data.push(obj);
    this.setState({
      orderItem: data
    })
  }

  onBillAdd = (obj) => {
    const data = [...this.state.bill];
    data.push(obj);
    this.setState({
      bill: data
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Shopping Cart</h1>
        <div className="container">
          <ShoppingCart additem={this.OnAddItem} orders={this.state.orderItem} bill={this.onBillAdd} summary={this.state.bill} />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
