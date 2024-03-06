import { useState } from 'react'
import './App.css'

function App() {

  const closeFriends = [
    {
      name: "rohan",
      id: 1,
      age: 20,
    },
    {
      name: "dheeraj",
      id: 2,
      age: 20,
    },
    {
      name: "shashank",
      id: 3,
      age: 20,
    },
  ];
   
  const [count, setCount] = useState(closeFriends);

  function clearAll() {
    setCount([])
  }

  function removEle(id) {
    const arr = count.filter((mydata) => mydata.id != id)
    setCount(arr)
  }

  return (
    <>
      {
        count.map((data) => {
          return <h1 key={data.id}>name:{data.name}, id:{data.id}, age:{data.age}
          <button className='btn' onClick={()=> removEle(data.id)}>remove</button> </h1>
        })
      }
      <button onClick={clearAll}>clear all</button>
    </>
  );
}

export default App
