import{useState}  from "react";
import './App.css'

function Name() {
 const [name , setName]= useState('Dan')

 const toggleName= () =>{
  setName(name === 'Dan' ? 'James' : 'Dan');
 }

 

  return (
    <>
      <div className= 'container'>
        {name === 'James'? ( <div className="purple-container"></div>) : (<div className="aqua-container"></div> )}
        <p className="count">{name}</p>
         <div>
        <button onClick={toggleName} className="w-20 h-20 bg-green-500"> + </button>
       
        </div> </div>
     
    </>
  )
}

export default Name