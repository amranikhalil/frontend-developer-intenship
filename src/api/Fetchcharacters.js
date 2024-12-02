import React from 'react'

export const Fetchcharacters = async (query='') => {
    const url='https://rickandmortyapi.com/api/character'
    try{
        const response= await fetch(`${url}/?name=${query}`)
        const data= await response.json()
        return data.results.slice(0,10)
    }catch(error){
        console.log('error',error)
        return []
    }

}
