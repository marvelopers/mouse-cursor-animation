import React from 'react'
import { Memu } from 'src/model/roulette';
import * as Styles from './styled';

interface PieceProps {
  menu: Memu
}

const Piece = ({ menu }: PieceProps) => {
  const { step, food, text } = menu; 

  return (
    <Styles.Piece step={step}>
      {food}
      {text}
    </Styles.Piece>
  )
}

export default Piece
