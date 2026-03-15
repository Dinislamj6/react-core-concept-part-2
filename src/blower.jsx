import {useState } from "react"

export default function Blower () {
      const [ball, setBall]= useState(0);
      const [white,setWhite] = useState(0);
      const [noBall , setNoBall] = useState(0)


     const handelBall = () => {
        const updatedBall = ball + 1 ;
        setBall(updatedBall)
     }
     const handelWhiteBall = () => {
        const whiteBall = white + 1 ;
        setWhite(whiteBall)
        setBall(ball)
     }
     const handelNoBall = () => {
        const updateNoBall = noBall + 1 ;
        setNoBall(updateNoBall)

     }
    return (
        <div>
            <h2>Player : india Blower</h2>
            <p>No Ball : {noBall}</p>
            <p>whiteBall : {white}</p>
            <p>Ball Count : {ball}</p>
            <button onClick={handelBall}>Ball</button>
            <button onClick={handelNoBall}>No ball</button>
            <button onClick={handelWhiteBall}>White ball</button>
        </div>
    )
}