import { useState } from "react"

export default function Grocery() {
    const [item,setItem] = useState(0);
    let arr = [['samosa','pan','suparui'],['dudh','dahi','paneer'],['tel','vaseline','zandubam'],['bisleri','kinley','gudh']];
    return <div>
        <button onClick={()=> setItem(0)}>1</button>
        <button onClick={()=> setItem(1)}>2</button>
        <button onClick={()=> setItem(2)}>3</button>
        <button onClick={()=> setItem(3)}>4</button>
        <div>
                <h4>Grocery Shopping</h4>
                {arr[item].map((it, index) => (
                    <h5 key={index}>{it}</h5>
                ))}
        </div>
    </div>
}