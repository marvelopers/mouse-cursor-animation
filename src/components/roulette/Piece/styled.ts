import styled from "styled-components";

interface PieceProps{
  step : number;
  degree: number;
  range: number;
}

export const Piece = styled.div`
  flex: ${({ step }: PieceProps) => step ? step : 1 } 1 auto;
  background-color: #4444;
  color: #222222;

  position: absolute;
  top: 0;
  left: 0;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  clip: rect(0px, 320px, 320px, 160px);
  /* border: 1px solid purple; */

  transform: ${({ degree }: PieceProps) =>  `rotate(${degree}deg)`};


  &::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    clip: rect(0px, 160px, 320px, 0px);
    transform: ${({ range }: PieceProps) =>  `rotate(${range}deg)`};
    background-color: red;
  }
`
