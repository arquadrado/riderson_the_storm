import React from 'react'

export default class extends React.Component {
  render() {
    return (
      <ul className="sampdoria">
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}