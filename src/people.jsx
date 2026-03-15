import { use } from "react"

export default function People ({fetchPeople}) {
    const people = use(fetchPeople)
    // console.log(people)
    return (
        <div className="card">
            <h3>People:{people.length}</h3>
        </div>
    )
}