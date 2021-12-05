import React from 'react'
import Disk from '../Disk'

const mock = [
  {
    food: 'pizza',
    text: '피자'
  },
  {
    food: 'chikin',
    text: '치킨'
  },
  {
    food: 'sushi',
    text: '초밥'
  },
  {
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
      </div>
    </div>
  )
}

export default Roulette
