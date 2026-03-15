import { useState } from "react"

export default function Counter () {
    const [count , setCount] = useState(0)
    const handelAdd = () => {
        const newCount = count + 1 ;
        setCount(newCount)
    }
    const counterStyle = {
        border : "2px solid red"
    } 
    return (
        <div style={counterStyle}>
            <h2>Count:{count}</h2>
            <button onClick={handelAdd}>Add</button>
        </div>
    )
}