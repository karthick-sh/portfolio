import React, {Component} from 'react';

class Snake extends Component {

  state = { snake_pos: [0,0] }

  componentDidMount() {
    this.setState({snake_pos: [0, 0]})
    setInterval(this.move, 1000);
  }

  move(){
    console.log(this.state)
    var new_pos = [this.state.snake_pos[0]+20, this.state.snake_pos[1]+20]
    this.setState({snake_pos: new_pos})
  }

  render() {
    var left = this.state.snake_pos_x + 'px';
    var top = this.state.snake_pos_y + 'px';
    var padding = 5000 + 'px';
    return (
      <div id="snake-head" style={{left: left, top:top}}/>
    )
  } 
}

export default Snake;