import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App(){
  const [searchStr,setSearchstr]= useState('');

  return (
    <>
      <Navbar />
      <div className="main px-[4vmin] py-[4vmin]">    
        
        <div className=''>

          <form className='flex justify-center gap-1' onSubmit={ (e)=>{e.preventDefault(); console.log(searchStr);} }>         
              <input className='input_string rounded-lg border w-72 px-5 py-2 focus:outline-none' placeholder='Dish name or major ingredients' 
                onChange={(e)=>{ setSearchstr(e.target.value); } } 
              />
              <button className='px-5 py-2 rounded-lg bg-gray-400 text-white hover:bg-gray-600 active:bg-gray-400' type='submit'>Search</button>
          </form>

        </div>
        

        <div className='result_container mt-10 flex flex-wrap justify-center gap-4'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>

      </div>
    </>
  );
}

export default App;
