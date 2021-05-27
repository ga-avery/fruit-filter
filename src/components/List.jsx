import { Component } from "react";

class List extends Component {
  render() {
    return (
      <ul>
        {this.props.fruits.map(fruit => <li key={fruit}>{fruit}</li>)}
      </ul>
    )
  }
}

export default List;
