
import { useState } from 'react'
import './App.css'
function App() {
  const [inputValue,setInputValue] = useState("0");
  const [outputResult,setOutputResult] = useState("0");


  const handleOnClick = (input)=>{
   if(input === '='){
    calculateValue();
   }else if(input === 'AC'){
    clearInputValue();
   }else if(input === 'DEL'){
    clearFromLast();
   }else{
    setInputValue(inputValue+input)
   }
  }

const calculateValue = ()=>{
    try{
       const  calcOutput = eval(inputValue)
        setOutputResult(calcOutput)
    }
    catch (err){
        setOutputResult(err)
    }
}

const clearInputValue = ()=>{
    setInputValue('')
    setOutputResult('')

}
const clearFromLast = ()=>{
    setInputValue(inputValue.slice(0,-1))
}
  return (
    <>
    <h3 className='text-danger text-center '>Simple Calculator App</h3>
     <div style={{width: '400px' , height: '630px', marginTop:'100px'}} className="container bg-secondary mb-5 p-5">
        <div  className="input1 form-control">
        <div className='bg-dark' style={{height:'50px'}} >{inputValue || 0}</div>
        <div className='bg-dark fw-bolder' style={{height:'50px'}} >{outputResult || 0}</div>
        </div>
        <div className="row  mt-2 d-flex justify-content-between">
            <button  onClick={()=>handleOnClick('AC')} className='w-50'>AC</button>
          <button  onClick={()=>handleOnClick('DEL')}  className='w-25'>DEL</button>
          <button  onClick={()=>handleOnClick('/')}  className='w-25'>/</button>
        </div>
        <div className="row mt-2 d-flex justify-content-between">
        <button   onClick={()=>handleOnClick('7')}  className='w-25'>7</button>
          <button  onClick={()=>handleOnClick('8')}  className='w-25'>8</button>
          <button  onClick={()=>handleOnClick('9')}  className='w-25'>9</button>
          <button  onClick={()=>handleOnClick('*')}  className='w-25'>*</button>
        </div>
        <div className="row  mt-2 d-flex justify-content-between">
          <button  onClick={()=>handleOnClick('6')} className='w-25'>6</button>
          <button  onClick={()=>handleOnClick('5')} className='w-25'>5</button>
          <button  onClick={()=>handleOnClick('4')} className='w-25'>4</button>
          <button  onClick={()=>handleOnClick('+')}  className='w-25'>+</button>
        </div>
        <div className="row  mt-2 d-flex justify-content-between">
          <button  onClick={()=>handleOnClick('3')}  className='w-25'>3</button>
          <button  onClick={()=>handleOnClick('2')}  className='w-25'>2</button>
          <button  onClick={()=>handleOnClick('1')}  className='w-25'>1</button>
          <button  onClick={()=>handleOnClick('-')}  className='w-25'>-</button>
        </div>
        <div className="row  mt-2 d-flex justify-content-between">
          <button  onClick={()=>handleOnClick('0')}  className='w-25'>0</button>
          <button  onClick={()=>handleOnClick('.')}  className='w-25'>.</button>
          <button  onClick={()=>handleOnClick('=')}  className='w-50'>=</button>
        </div>
        
       
</div>
    </>
  )
}

export default App
