import React, {Fragment, Component} from 'react';
import TodoItem from './TodoItem';
import './style.css'

class TodoList extends Component {

  constructor(props) {
    super(props); // super only in constructor to call base class constructor
    this.state = {
      inputValue: '',
      list: [],
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">input content</label>
          {/*下面是一个input框*/}
          <input 
            id="insertArea"
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>submit</button>
        </div>      
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }
  
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item} 
          index={index}
          handleItemDelete={this.handleItemDelete}
        />
      )
    })
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }));
  }

  handleInputChange (e) {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }));
  }

  handleItemDelete (index) {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {list}
    });
  }
}

export default TodoList;