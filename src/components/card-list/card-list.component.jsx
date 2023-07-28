import { Component } from "react";

class Cardlist extends Component {
  render() {
    const { users } = this.props;

    return (
      <div>
        {users.map((user) => {
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

export default Cardlist;
