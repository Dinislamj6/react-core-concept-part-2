import { use } from "react"
import Post from "./post"

export default function Posts ({postPromise}) {
    const posts = use(postPromise)
    return (
        <div className="card">
            <h3>All Posts Are Here{posts.length}</h3>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}