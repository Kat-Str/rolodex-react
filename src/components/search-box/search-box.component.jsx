import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <input
        type="search"
        placeholder="Search users"
        onChange={this.props.onChange}
      />
    );
  }
}

export default SearchBox;
