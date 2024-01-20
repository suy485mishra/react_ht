import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setcolor] = useState('orange');

  //or can directly switch color using setcolor in onclick
  //  function changecolor(color){
  //     setcolor(color); 
  //  }
  return (
    <div className="w-full h-screen bg-black duration-500" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center inset-x-0 px-2 bottom-12">
        <div className="flex  justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-sm ">
          <button onClick={()=>setcolor('red')} style={{backgroundColor:'red'}} className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'>Red</button>
          <button onClick={()=>setcolor('blue')} style={{backgroundColor:'blue'}}className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'>Blue</button>
          <button onClick={()=>setcolor('green')}style={{backgroundColor:'green'}} className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'>Green</button>
          <button onClick={()=>setcolor('purple')}style={{backgroundColor:'purple'}} className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'>Purple</button>
          <button onClick={()=>setcolor('yellow')} style={{backgroundColor:'yellow'}}className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'>Yellow</button>
          <button onClick={()=>setcolor('pink')}style={{backgroundColor:'pink'}} className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'>Pink</button>
        </div>
      </div>
    </div>
  );
}

export default App;
