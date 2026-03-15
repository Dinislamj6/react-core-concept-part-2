
import Counter from './counter'
import './App.css'
import Batsman from './batsman'
import Blower from './blower'
import Users from './users'
import { Suspense } from 'react'
import Friends from './friends'
import People from './people'
 import Public from './public'
import BestFriends from './bestFriends'
import Posts from './posts'


const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
.then(res =>res.json())

const fetchPublic = fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())

const fetchPeople = fetch("https://jsonplaceholder.typicode.com/users")
 .then(res => res.json())

          /// use() async await 
const fetchFriends = async() => {
  const res =  await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json()
}

const fetchPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json()
}

const fetchBestFriend = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json()
}


 
function App() {


  const postPromise = fetchPost() ;
  const friendPromise = fetchFriends();

  const bestFriendsPromise = fetchBestFriend()

  function handelClick () {
    alert ("I am clicked")
  }

  const handelClick3 = () => alert("i am click3")

  const handelClick5 = (num) => {
    const newNum = num + 5 ;
    alert(newNum)

  }
  const handelClick8 = (num) => {
    const newNum = num + 2 ;
    alert(newNum)
  }
  const handelClick6 = () => alert ("click 6")
  return (
    <>
     <h3>Vite +  React</h3>


     <Suspense fallback={<h4>post are coming............</h4>}>
       <Posts postPromise={postPromise}></Posts>
     </Suspense>
     {/* <Suspense fallback={<p>post coming .......</p>}>
     <Posts PostsPromise={PostsPromise}></Posts>
     </Suspense> */}
     <Suspense fallback={<p>Best friend loading...</p>}>
      <BestFriends bestFriendsPromise={bestFriendsPromise}></BestFriends>
     </Suspense>
     <Suspense fallback={<h3>loading people.......</h3>}>
      <People fetchPeople={fetchPeople}></People>
     </Suspense>
     
     <Suspense fallback={<h3>friends are comming for treat.....</h3>}>
       <Friends friendPromise={friendPromise}></Friends>
     </Suspense>


     <Suspense fallback={<h3>loading...</h3>}>
      <Users fetchUsers={fetchUsers}></Users>
     </Suspense>

     <Suspense fallback={<h2>public Coming....</h2>}>
      <Public fetchPublic={fetchPublic}></Public>
     </Suspense>

    
  
     <Blower></Blower>
      <Batsman></Batsman>
       <Counter></Counter>
     <button onClick={handelClick}>Click 1</button>

     {/* <button onClick={function handelClick() {
      alert(" i am click")
     }}>Click Me 2</button> */}
     <button onClick={handelClick3}>Click me 3</button>

     <button onClick={() => alert("click me 4")}>click me 4</button>

    <button onClick={() => handelClick5(5)}>Click add 5</button>

    <button onClick={handelClick6}>click 6</button>

    <button onClick={() => alert("click 7")}>click 7</button>

    <button onClick={() =>handelClick8(8)}>Click 8</button>

  
    </>    
  )
}

export default App
