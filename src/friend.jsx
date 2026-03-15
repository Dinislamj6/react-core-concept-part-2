

 export default function friend ({friend}) {
     const {name,username,email,address} = friend
    return (
        <div className="card">
            <h3>name:{name}</h3>
            <p>username:{username}</p>
            <p>Email:{email}</p>
            
        </div>
    )
}