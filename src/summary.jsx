// api url = https://jsonplaceholder.typicode.com/users
fetch("https://jsonplaceholder.typicode.com/users")
 .then(res => res.json())
 .then(data =>  console.log(data))

 const userData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = res.json()
    console.log(data)
    return data
 }