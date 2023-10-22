import { useState } from "react";
import Card from "./Card";

const Home = ()=>{
    const [searchStr,setSearchstr]= useState('');

    function getIds(){
           
    }
    function extractRecipeID(uri) {
        const regex = /#recipe_(.*)/;
        const match = uri.match(regex);
        return match ? match[1] : null;
    }
    
    return(
        <div className="main px-[4vmin] py-[4vmin]">    
        
            <div className=''>
            {/* <p className="text-lg">What are you hungry for?</p> */}
            <form className='flex justify-center gap-1' onSubmit={ (e)=>{e.preventDefault(); console.log(searchStr);} }>         
                <input className='input_string rounded-lg border w-96 px-5 py-2 focus:outline-none text-black   ' placeholder='Dish or major ingredients' 
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

    );
}

export default Home;