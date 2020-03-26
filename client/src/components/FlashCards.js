import React, { useState } from 'react'
import { useSprings } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import Card from './Card'
import '../css/FlashCards.css'

const to = i => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100 
})
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })

const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

const FlashCards = (props) => {
  const { cardData, mode } = props
  const [score, setScore] = useState(0)
  const [gone] = useState(() => new Set()) 
  const [cardProp, set] = useSprings(cardData.length, i => ({ ...to(i), from: from(i) }))
  const bind = useDrag(
    ({
      args: [index],
      down,
      movement: [mx],
      distance,
      direction: [xDir],
      velocity 
    }) => {
    const trigger = velocity > 0.2
    const dir = xDir < 0 ? -1 : 1
    
    if (!down && trigger) gone.add(index)

    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (100 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      if(mode==='quiz' && isGone){
        let userAns = x < 0 ? false : true
        if(userAns === cardData[i].answer) setScore(score+1)
      }
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === cardData.length) setTimeout(() => {
      setScore(0)
      return gone.clear() || set(i => to(i))
    }, 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <div className="FlashCards">
      {cardProp.map(({ x, y, rot, scale }, i) => (
      <Card
        key={i+'card'}
        i={i}
        x={x}
        y={y}
        rot={rot}
        scale={scale}
        trans={trans}
        data={cardData[i]}
        bind={bind}
        mode={mode}
      />
    ))}
    {mode==='quiz'&& `Score ${score}/${cardData.length}`}
  </div>
  )
}

export default FlashCards