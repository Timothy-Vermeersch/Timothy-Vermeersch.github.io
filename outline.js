'use strict';

const e = React.createElement;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'h1',
      "In Progress"
    );
  }
}
const domContainer = document.querySelector('#root');
ReactDOM.render(e(Header), domContainer);
