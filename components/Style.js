export default class extends React.Component {

  constructor (props) {
    super(props)
    this.color = '#'+Math.floor(Math.random()*16777215).toString(16);
  }

  render() {
    const color = '#160240'

    return (
      <style>{`
      h3 {
        color: indigo;
      }
      .sampdoria {
        height: 500px;
        background-color: orange;
        list-style: none;
      }
      .sampdoria li {
        display: inline-block;
        background-color: ${color};
        color: #fff;
        height: 100%;
        padding: 5px;
      }
    `}</style>
    );
  }
}