import React from 'react'
import * as Styles from './styled';

interface PieceProps {
  menu: {
    food: string, 
    text: string
  }  
}

const Piece = ({ menu }: PieceProps) => {
  const { food, text } = menu; 

  return (
    <Styles.Piece>
      {food}
      {text}
    </Styles.Piece>
  )
}

export default Piece
