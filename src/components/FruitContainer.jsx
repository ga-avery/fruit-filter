import { Component } from "react";
import Input from './Input';
import List from './List';

class FruitContainer extends Component {
  state = {
    fruits: this.props.fruits,
    fruitValue: '',
  }
  filterUpdate = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const filterFruitList = this.props.fruits
      .filter(fruit => fruit.includes(value.toLowerCase()))
    this.setState({
      fruits: filterFruitList,
      fruitValue: value,
    })
  }
  render() {
    return (
      <div>
        <Input value={this.state.fruitValue} onChange={this.filterUpdate} />
        <List fruits={this.state.fruits} />
      </div>
    )
  }
}

export default FruitContainer;
