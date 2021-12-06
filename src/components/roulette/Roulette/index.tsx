import React from 'react'
import Disk from '../Disk'
import * as Styles from './styled';


const mock = [
  {
    step: 1, 
    food: 'pizza',
    text: '피자'
  },
  {
    step: 2, 
    food: 'chikin',
    text: '치킨'
  },
  {
    step: 3, 
    food: 'sushi',
    text: '초밥'
  },
  {
    step: 1, 
    food: 'ramen',
    text: '라면'
  },
]

const Roulette = () => {
  // const menu = Array.from({length: 4}, ()=> 0)
  return (
    <div>
      <h1>오늘 뭐 먹지?</h1>
      <div>
        <Disk data={mock}/>
        {/* or spoon */}
        <Styles.GoButton>GO</Styles.GoButton> 
      </div>
    </div>
  )
}

export default Roulette
