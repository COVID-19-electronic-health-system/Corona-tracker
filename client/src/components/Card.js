import React from "react";
import { animated, interpolate } from "react-spring";
import Button from '@material-ui/core/Button';

class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, bind, data } = this.props;
    const { title, body, img } = data;

    return (
      <animated.div
        key={i}
        style={{
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          )
        }}
      >
        <animated.div
          {...bind(i)}
          style={{
            transform: interpolate([rot, scale], trans)
          }}
        >
          <div className="card" style={{textAlign:'left'}}>
            <h1 style={{color:'red', fontStyle:'cursive'}}>{title}</h1>
            <h3>{body}</h3>
              <footer style={{textAlign:'left'}}>Fun Fact#{i} 
                <Button size="small">Learn More</Button>
              </footer>
          </div>
        </animated.div>
      </animated.div>
    );
  }
}


export default Card;