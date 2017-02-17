import React from 'react'
import TodoList from '../components/todo_list/TodoList'
import MainStyle from '../styles/Styles'
import losash from 'lodash'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.debouncedSubmit = this.debouncedSubmit.bind(this);
    this.state = {items: [], text: ''};
  }

  componentDidMount () {
    console.log('component mounted')
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.debouncedSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
        <MainStyle></MainStyle>
      </div>
    );
  }

  debouncedSubmit (e) {
    e.preventDefault()
    console.log(lodash)
    //return _.debounce(this.handleSubmit(e), 3000)
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    const color = '#'+Math.floor(Math.random()*16777215).toString(16)

    e.preventDefault()
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      color: color
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}