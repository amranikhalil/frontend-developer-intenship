import './App.css';
import { useEffect,useState } from 'react';
import { Fetchcharacters } from './api/Fetchcharacters';
import { Searchbar } from './component/Searchbar/Searchbar';
import {Charactergrid} from './component/Charactergrid/Charactergrid'
function App() {
  const [characters,setCharacters]=useState([])
  const [query,setQuery]=useState('')
  useEffect(()=>{
    const initialFetch=async()=>{

      const data =await  Fetchcharacters()
      setCharacters(data)
    }
    initialFetch()
  },[])
const handleinput= async(data)=>{
  setQuery(data)
  const results = await  Fetchcharacters(data)
  console.log('see',results)
  setCharacters(results)

}

  return (

    <div className="App">
      <h1 className='title'> “Rick & Morty”</h1>
      <Searchbar handleinput={handleinput} query={query}/>
      <Charactergrid characters={characters}/>
    </div>
  );
}

export default App;
