import React from 'react'
import { Memu } from 'src/model/roulette';
import * as Styles from './styled';

interface PieceProps {
  menu: Memu
  degree: number
  idx: number
}

const Piece = ({ menu , degree, idx }: PieceProps) => {
  const { step, food, text } = menu; 

  return (
    <>
    <Styles.Piece step={step} degree={idx*degree} range={degree}>
      {degree}
      {food}
      {text}
    </Styles.Piece>
    </>
  )
}

export default Piece
