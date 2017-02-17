import React from 'react'
import TodoItem from '../todo_item/TodoItem'
import Style from './Style'

export default class extends React.Component {
  render() {
    return (
        <div className="wrapper">
            <ul className="sampdoria">
                {this.props.items.map(item => (
                  <TodoItem key={item.id} item={item} itemCount={this.props.items.length} />
                ))}
            </ul>
            <Style></Style>
        </div>
    );
  }
}