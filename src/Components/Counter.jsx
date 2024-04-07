import React, { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';


function Counter() {
    //state creation
    const[counter,setCounter]=useState(0)// apply 0 as the inital value
    function incrementCounter(){
        //increment by 1
        setCounter(counter+1)
    }
    function decrementCounter(){
        //decrement by 1
        if(counter!==0){
            setCounter(counter-1)
        }}
    function resetCounter(){
        setCounter(0)

    }
  return (
    <div className='m-5 p-5 d-flex justify-content-center align-item-center'>
        <div className='container m-5 p-5 border border-2 border-dark shadow rounded w-50 bg-dark'>
            <h1>Counter App </h1>
            <h1>{counter}</h1>
            <div className='d-flex justify-content-between'>
        <MDBBtn color='success'onClick={incrementCounter}>Increment</MDBBtn>
        <MDBBtn color='primary'onClick={decrementCounter}>Decrement</MDBBtn>
        <MDBBtn color='light'onClick={resetCounter}>Reset</MDBBtn>

        </div>
        </div>
        
    </div>
  )
}

export default Counter