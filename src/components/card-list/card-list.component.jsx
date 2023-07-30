import { Component } from "react";

class Cardlist extends Component {
  render() {
    const { users } = this.props;

    return (
      <div className="card-list">
        {users.map((user) => {
          const { name, email, id } = user;
          return (
            <div className="card-container" key={id}>
              <img
                alt={`user ${name}`}
                src={`https://robohash.org/${id}?set=set5&size=180x180`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Cardlist;
