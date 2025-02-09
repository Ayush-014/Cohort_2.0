import { useMemo, useState } from "react"

export default function SumApp() {
    const  [counter,setCounter] = useState(0);
    const [val,setVal] = useState(0);

    const computed = useMemo (function () {
        {console.log('memo called')}
        return (val*(val+1))/2;
    },[val])

    return <div>
        <input onChange={(e)=>{
            setVal(Number(e.target.value));
        }}></input>
        <p>Sum is {computed} </p>
        <button onClick={() => setCounter(prevCounter => prevCounter + 1)}> {counter} </button>
    </div>
}