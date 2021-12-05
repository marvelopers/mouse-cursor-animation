import React from 'react'
import Piece from '../Piece';
import * as Styles from './styled';

interface DiskProps {
  data: {
    food: string, 
    text: string
  }[]
}

const Disk = ({ data }: DiskProps) => {

  return (
    <Styles.Disk> 
      {data.map((item)=> <Piece menu={item}/>)}
    </Styles.Disk>
  )
}

export default Disk
