import { useState } from 'react'
import { useCallback,useEffect,useRef } from 'react'

function App() {
  const [len,setLen]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [specialcharallowed,setSpecialcharallowed]=useState(false)
  const [pwd,setPwd]=useState('')
   
  const passwordRef = useRef(null)


  const generatePassword=useCallback(()=>{
    let pass=''
    let str='BCDEFGHIJKLMNOPQRSTUVQXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed)str+='1234567890'
    if(specialcharallowed)str+='!@#$%^&*()_+=~`'
    for(let i=1;i<len;i++){
      const j=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(j)
    }
    setPwd(pass)
  },[len,numberAllowed,specialcharallowed]);



  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(pwd)
    passwordRef.current?.select()
    

  }

  useEffect(()=>{
    generatePassword()
  }, [len, numberAllowed,specialcharallowed])


  
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
    
    <h1 className=' text-white text-center my-5'>Random Passowrd Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-2'>
    <input type='text' value={pwd} className='outline-none w-full py-1 px-3'
    placeholder='Your Password' readOnly
    ref={passwordRef} ></input>
    <button onClick={copyPasswordToClipboard} className=' outline-none bg-red-400 text-white px-6 font-mono shrink-0'>Copy</button>
    </div>

      <div
      className='flex text-sm gap-x-2'
      >
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={8}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLen(e.target.value)}
           />
           <label htmlFor='len'>Length: {len}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }}
           name=""
          id="" />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
            type='checkbox'
            defaultChecked={specialcharallowed}
            onChange={()=>setSpecialcharallowed((prev)=>!prev)}
          />
          <label htmlFor='charInput'> Special Character</label>
        </div>
     
        
      </div>
    </div>
 
  )
}

export default App
