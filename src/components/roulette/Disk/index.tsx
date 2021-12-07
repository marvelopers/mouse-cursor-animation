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
      {data.map((item, idx)=> <Piece menu={item} idx={idx} degree={360/data.length}/>)}
    </Styles.Disk>
  )
}

export default Disk
