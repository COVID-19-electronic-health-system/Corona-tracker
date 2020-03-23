import React from "react";
import { animated, interpolate } from "react-spring";

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
          <div className="card">
            <h1>{title}</h1>
            <h3>{body}</h3>
          </div>
        </animated.div>
      </animated.div>
    );
  }
}


export default Card;