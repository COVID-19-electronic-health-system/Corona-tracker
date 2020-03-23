import React from "react";
import { animated, interpolate } from "react-spring";
import Button from '@material-ui/core/Button';

const Card = (props) => {
  
    const { i, x, y, rot, scale, trans, bind, data } = props;
    const { title, body, img, footer, link } = data;
    // TODO ADD STYLING
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
            <h3 style={{fontSize:'1rem'}}>{body}</h3>
              <footer style={{textAlign:'left'}}>{footer}
                {link && <Button size="small" href={link} >Learn More</Button>}
              </footer>
          </div>
        </animated.div>
      </animated.div>
    );
}


export default Card;