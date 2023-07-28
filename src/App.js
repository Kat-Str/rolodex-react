import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: "",
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
    const filteredUsers = this.state.users.filter((user) => {
      return user.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search users"
          onChange={(event) => {
            const searchField = event.target.value.toLocaleLowerCase();
            this.setState(() => {
              return { searchField };
            });
          }}
        />

        {filteredUsers.map((user) => {
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
