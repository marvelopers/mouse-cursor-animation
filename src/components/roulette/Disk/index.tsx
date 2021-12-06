import React from 'react'
import { Memu } from 'src/model/roulette';
import Piece from '../Piece';
import * as Styles from './styled';

interface DiskProps {
  data: Memu[]
}

const Disk = ({ data }: DiskProps) => {

  return (
    <Styles.Disk> 
      {data.map((item)=> <Piece menu={item}/>)}
    </Styles.Disk>
  )
}

export default Disk
