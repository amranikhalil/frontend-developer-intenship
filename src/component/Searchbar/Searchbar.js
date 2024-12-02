import React from 'react'
import { useState } from 'react'
import './search.css'
export const Searchbar = ({handleinput,query}) => {
  const [input,setInput]=useState({query})

  const handlesubmit=(e)=>{
    e.preventDefault()
    handleinput(input)
  }
  const handlechange=(e)=>{
    setInput(e.target.value)
  }
  return (
    <>
    <h1>charachters</h1>
    <form className='wraper'
    onSubmit={handlesubmit}
    >
      <input className='input'
        onChange={handlechange}
      /> 
      <button className='search'
      onClick={handlesubmit}
      >
         search

      </button>
    </form>
    </>
  )
}
