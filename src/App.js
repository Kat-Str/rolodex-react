import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { users: users };
          },
          () => console.log(this.state)
        )
      );
  }

  render() {
    return (
      <div className="App">
        {this.state.users.map((user) => {
          return (
            <div key={user.id}>
              <h2>{user.name}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
