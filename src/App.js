import { useState } from 'react';
import './App.css';

// function App() {
//   const a = 'hi there'; 
//   return (
// <div>{a}</div>
//   )
// }
const App = () => {
  const[name, setName] = useState("")
  return(
    <div>
      <input placeholder='Enter Your Name' 
      onChange={(e)=> setName(e.target.value)}
      />
      {name}
      <button className='btn'>ADD</button>
    </div>
  );
};

export default App;
