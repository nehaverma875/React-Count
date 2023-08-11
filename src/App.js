import React, { useState } from 'react'

import logo from './logo.svg';
import './App.css';

function App() {

  const[count,setCount]=useState(0);

  function dcHandler(){
    setCount(count-1);

  }

  function incHandler(){
    setCount(count+1);
  }
  function rsHandler(){
    setCount(0);
  }
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center  items-center bg-[#e67e22] flex-col gap-10'>
    <div className= 'text-[#0398d4] font-medium text-2xl '>Increment & Decrement</div>

<div className='bg-white flex justify-center gap-12 rounded-sm py-3 text-[#344151] text-[25px]'>
  <button onClick={dcHandler} className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'>
    -
  </button>
  <div className='font-bold gap-12 text-5xl'>{count}</div>
  <button onClick={incHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">+</button>
</div>
      
      <button onClick={rsHandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg">Reset</button>
    </div>
  );
}

export default App;
