import React, { useMemo, useState } from 'react'

const Memoexample = () => {
    const [count,setCount] = useState(0)
    const [num,setNum] = useState(0)
    const addCounter = ()=>{
        console.log('counter called.');
        setCount(count+1)
    }
    const addNum = ()=>{
        console.log('number called.');
        setNum(num+10)
    }
    const addCalc = (count)=>{
        console.log('calc called.');
        for(let i=0;i<10000;i++){
            count+=i
        }
        return count
    }
    const calc = useMemo(()=>{
        return addCalc(count)
    },[count])


  return (
    <div>
      <h3>Memo Example</h3>
      <h4>Count is -- {count}</h4>
      <button onClick={addCounter}>Add Counter</button>
      <h4>Num is -- {num}</h4>
      <button onClick={addNum}>Add Number</button>
      <h4>Calc is -- {calc}</h4>
      
    </div>
  )
}

export default Memoexample
