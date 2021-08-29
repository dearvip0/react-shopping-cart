import React from "react";

import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header className="App-header">
              <Link to="/">React Shopping Cart</Link>
              <Link to="/admin">Admin</Link>
            </header>
            <main>
              <Route path="/" component={HomeScreen} exact />
              <Route path="/admin" component={AdminScreen} />
            </main>
            <footer>Copyright &copy;</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
