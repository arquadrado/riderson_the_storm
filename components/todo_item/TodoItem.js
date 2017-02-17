import React from 'react'
import Style from './Style'

export default class extends React.Component {
  render() {
    return (
        <li key={this.props.item.id} className={`item-${this.props.item.id}`}>
            <span>{this.props.item.text}</span>
            <Style
                color={this.props.item.color}
                itemId={this.props.item.id}
                itemCount={this.props.itemCount}
            ></Style>
        </li>
    );
  }
}