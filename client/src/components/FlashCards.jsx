/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */

import React, { useState } from 'react';
import { useSprings } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import Card from './Card';

const useStyles = makeStyles({
  FlashCards: {
    display: 'flex',
    justifyContent: 'center',
    cursor:
      "url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png') 39 39, auto;",
  },
});

const to = i => ({
  x: 0,
  y: 0,
  scale: 0.95,
  rot: -1 + Math.random() * 5,
  delay: i * 30,
});
const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -1500 });

const trans = (r, s) => `perspective(1500px) rotateX(15deg) rotateY(${r / 5}deg) rotateZ(${r}deg) scale(${s})`;

const FlashCards = props => {
  const { cardData, mode } = props;
  const classes = useStyles();
  const [score, setScore] = useState(0);
  const [gone] = useState(() => new Set());
  const [cardProp, set] = useSprings(cardData.length, i => ({ ...to(i), from: from(i) }));
  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2;
    const dir = xDir < 0 ? -1 : 1;

    if (!down && trigger) gone.add(index);

    set(i => {
      if (index !== i) return; // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index);
      const x = isGone ? (100 + window.innerWidth) * dir : down ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? dir * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1; // Active cards lift up a bit
      if (mode === 'quiz' && isGone) {
        const userAns = x > 0;
        if (userAns === cardData[i].answer) setScore(score + 1);
      }
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } };
    });
    if (!down && gone.size === cardData.length)
      setTimeout(() => {
        setScore(0);
        return gone.clear() || set(i => to(i));
      }, 600);
  });
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <div>
      <Typography color="secondary" variant="button">
        {mode === 'quiz' && `Score ${score}/${cardData.length}`}
      </Typography>
      <div className={classes.FlashCards}>
        {cardProp.map(({ x, y, rot, scale }, i) => (
          <Card
            key={`${i}card`}
            i={i}
            x={x}
            y={y}
            rot={rot}
            scale={scale}
            trans={trans}
            data={cardData[cardData.length - i - 1]}
            bind={bind}
            mode={mode}
          />
        ))}
      </div>
    </div>
  );
};

FlashCards.propTypes = {
  cardData: PropTypes.arrayOf(Object).isRequired,
  mode: PropTypes.string.isRequired,
};

export default FlashCards;
