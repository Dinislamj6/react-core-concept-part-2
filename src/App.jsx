
import Counter from './counter'
import './App.css'
import Batsman from './batsman'
import Blower from './blower'
function App() {

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
