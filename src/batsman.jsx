import { useState } from "react"

export default function Players () {
    const [runs,setRuns] = useState(0)
    const [sixes, setSixes] = useState(0)
    
    const handleSingle = () => {
        const updatedRuns = runs + 1 ;
        setRuns(updatedRuns)
    }
    const handleSix = () => {
        const updatedRuns = runs + 6 ;
        const updatedSix = sixes + 1 ;
        setSixes(updatedSix)
        setRuns(updatedRuns)
    }
    const handleFour = () => {
        const updatedRuns = runs + 4 ;
        setRuns(updatedRuns)
    }
    return (
        <div>
            <p><small>six: {sixes}</small></p>
            {
                runs > 50 && <p>Yours Score : 50</p>
            
            }
            {
                runs > 100 && <p>Yours Score : 100</p>
            }
            <h3>Player : bangladeshi Batsman</h3>
            <h2>Score: {runs}</h2>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleSix}>Six</button>
            <button onClick={handleFour}>Four</button>
        </div>
    )
}