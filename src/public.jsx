import { use } from "react"

export default function Public ({fetchPublic}) {
    const Public = use(fetchPublic)
    return (
        <div>
            <h3>Public:{Public.length}</h3>
        </div>
    )
}