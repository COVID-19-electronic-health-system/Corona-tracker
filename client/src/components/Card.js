import React from "react";
import { animated, interpolate } from "react-spring";
import Button from '@material-ui/core/Button';

const Facts = ({data}) => {
  const { title, body, img, footer, link } = data
    return (
       <div className="card" style={{textAlign:'left'}}>
          <h1 style={{color:'red', fontStyle:'cursive'}}>{title}</h1>
          <h3 style={{fontSize:'1rem'}}>{body}</h3>
            <footer style={{textAlign:'left'}}>{footer}
              {link && <Button size="small" href={link} >Learn More</Button>}
            </footer>
       </div>
     );
};

const Quiz = ({data}) => {
  const { question,footer, link } = data
    return (
       <div className="card" style={{textAlign:'left'}}>
          <h1 style={{ fontStyle:'cursive', fontSize:'1rem'}}>{question}</h1>
            <h3 className="item2" style={{fontSize:'1rem'}}>False or True</h3>
            <footer style={{textAlign:'left'}}>{footer}
              {link && <Button size="small" href={link} >Learn More</Button>}
            </footer>
       </div>
     );
};


const Card = (props) => {
    const { i, x, y, rot, scale, trans, bind, data, mode } = props;
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
         {mode==='facts' && <Facts data={data}/>}
         {mode==='quiz' && <Quiz data={data}/>}
        </animated.div>
      </animated.div>
    );
}


export default Card;