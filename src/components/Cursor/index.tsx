import React, { useEffect, useState } from 'react'


// import { scaleLinear } from "d3-scale";
// import { interpolateInferno } from "d3-scale-chromatic";
// import { easeElastic } from "d3-ease";
// import { NodeGroup } from "react-move";

interface Position {
  pageX: number;
  pageY: number; 
}

// const linear = scaleLinear().domain([0, window.innerWidth]);

const Cursor = () => {

  // const range = (num : number) => Array.from({length: num}, ()=> 0);
  // const [position, setPosition] = useState({ x: 250, y: 300 });

  // componentDidMount() {
  //   window.addEventListener("mousemove", this.handleMouseMove);
  //   window.addEventListener("touchmove", this.handleTouchMove);
  // }

  // useEffect(() => {
  //   return () => {
  //   }
  // }, [])


  // const handleMouseMove= ({ pageX, pageY }: Position)=>{
  //   setPosition({ x: pageX, y: pageY})
  // }

  // const handleTouchMove= ({ touches })=>{
  //   handleMouseMove(touches[0])
  // }

  return (
    <>
    <div>position</div>
    </>
  )
}

export default Cursor;


  // {/* <NodeGroup
  //       data={range(6).map(d => {
  //         return {
  //           key: `key-${d}`,
  //           x: position.x,
  //           y: position.y
  //         };
  //       })}
  //       keyAccessor={d => d.key}
  //       start={data => {
  //         return { x: data.x, y: data.y };
  //       }}
  //       update={(data, index) => {
  //         return {
  //           x: [data.x],
  //           y: [data.y],
  //           timing: {
  //             delay: index * 120,
  //             duration: 2500,
  //             ease: easeElastic
  //           }
  //         };
  //       }}
  //     >
  //       {nodes => (
  //         <div>
  //           {nodes.map(({ key, data, state: { x, y } }, index) => (
  //             <div
  //               key={key}
  //               style={{
  //                 backgroundColor: interpolateInferno(linear(x)),
  //                 width: 50,
  //                 height: 50,
  //                 borderRadius: 25,
  //                 opacity: 0.7,
  //                 WebkitTransform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
  //                 transform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
  //                 zIndex: nodes.length - index + 5000
  //               }}
  //             />
  //           ))}
  //         </div>
  //       )}
  //     </NodeGroup> */}