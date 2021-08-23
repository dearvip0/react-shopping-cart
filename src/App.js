import data from "./data.json";
import React from "react";
import Products from "./components/Products/Products";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }

  render() {
    return (
      <div className="grid-container">
        <header className="App-header">
          <a href="/" className="">
            React Shopping Cart
          </a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">Cart Items</div>
          </div>
        </main>
        <footer>Copyright &copy;</footer>
      </div>
    );
  }
}

export default App;
