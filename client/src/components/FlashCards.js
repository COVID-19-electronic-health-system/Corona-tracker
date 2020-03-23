import React, { useState } from 'react'
import { useSprings } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import Card from './Card'
import '../css/FlashCards.css'

const cardData = [
  {
    title:'Did you know?',
    body:'This virus was first detected in Wuhan City, Hubei Province, China. The first infections were linked to a live animal market, but the virus is now spreading from person-to-person.',
    img:'https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg',
    footer:'fun fact# 1'
  },
  {
    title:'Did you know?',
    body:'The virus causing coronavirus disease 2019 (COVID-19), is not the same as the coronaviruses that commonly circulate among humans and cause mild illness, like the common cold.',
    img:'https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg',
    footer:'fun fact# 2'
  },
  {
    title:'1',
    body:'5',
    img:'https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg',
    footer:'fun fact# 3'
  },
  {
    title:'1',
    body:'4',
    img:'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg',
    footer:'fun fact# 4'
  },
  {
    title:'1',
    body:'3',
    img:'https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg',
    footer:'fun fact# 5'
  },
  {
    title:'Did you know?',
    body:"In Covid-19,'CO' stands for 'corona', 'VI' for 'virus', and 'D' for disease. Formerly, this disease was referred to as 2019 novel coronavirus or 2019-nCov. There are many types of human coronaviruses including some that commonly cause mild upper-respiratory tract illness",
    footer:'fun fact# 6'
  }
]

const to = i => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100 
})
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })

const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

const FlashCards = () => {
  const [gone] = useState(() => new Set()) 
  const [props, set] = useSprings(cardData.length, i => ({ ...to(i), from: from(i) }))
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
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === cardData.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <div className="FlashCards">
      {props.map(({ x, y, rot, scale }, i) => (
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
      />
    ))}
  </div>
  )
}

export default FlashCards