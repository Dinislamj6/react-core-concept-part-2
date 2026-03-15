import { use } from "react"

export default function BestFriends ({bestFriendsPromise }) {
    const bestFriends = use(bestFriendsPromise )
    return (
        <div>
            <h3>Best Friends :{bestFriends.length}</h3>
        </div>
    )
}