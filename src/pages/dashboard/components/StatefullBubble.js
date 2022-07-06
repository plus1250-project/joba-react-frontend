import { useState } from 'react'
import Bubble from './Bubble'



const data1 ={
  value:0,
  children: [
    {
      name : 'node1',
      value : 350
    },
    {
      name : 'node2',
      value : 300
    },
    {
      name : 'node3',
      value : 200
    },
    {
      name : 'node4',
      value : 350
    },
    {
      name : 'node5',
      value : 150
    },
    {
      name : 'node6',
      value : 100
    },
    {
      name : 'node7',
      value : 200
    },
    {
      name : 'node8',
      value : 100
    },
    {
      name : 'node9',
      value : 150
    },
    {
      name : 'node10',
      value : 250
    },
    {
      name : 'node11',
      value : 50
    },
    {
      name : 'node12',
      value : 50
    },
    {
      name : 'node13',
      value : 50
    },
    {
      name : 'node14',
      value : 10
    },
  ]
}

const Statefulbubble = () => {
  // const [array, setArray] = useState(data)
  // const additionalData = {
  //   name: 'Site 5',
  //   value: 99999,
  // }

  // const addToArray = () => {
  //   // console.log(additionalData)
  //   setArray(prevObj => ({ ...prevObj, children: [...prevObj.children, additionalData] }))
  // // ...prevObj, children: [...prevObj.children, additionalData]}))
  //   console.log(array)
  // }

  return (
    <>
      {/* eslint-disable-next-line react/button-has-type */}
      {/* <button onClick={addToArray}>Click</button> */}
      <Bubble data={data1} />
    </>
  )
}
export default Statefulbubble
