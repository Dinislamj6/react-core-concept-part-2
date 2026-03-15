export default function Post ({post}) {
    
    return (
        <div className="card">
            <h2>Title:{post.title}</h2>
            <p>Body: {post.body}</p>
        </div>
    )
}