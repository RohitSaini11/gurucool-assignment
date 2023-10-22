import { useEffect, useState } from "react";
import Card from "./Card";
// import Fetchdata from "./Fetch";
import { api_id,api_key,type } from "./API_AUTH_KEYS";


const Home = ()=>{
    const [searchStr,setSearchstr]= useState('');
    const [list,setList]= useState([]);

    const base_url= "https://api.edamam.com/api/recipes/v2";
    const auth= `app_id=${api_id}&app_key=${api_key}&type=${type}`;

    useEffect(()=>{
        console.log(searchStr,"::calling api!");

        const getData = async () => {
            try{
              let res={};
              if(searchStr !==""){
                  res = await fetch(`${base_url}?${type}&q=${searchStr}&${auth}`);
              }
              else{
                return;
              }
              if (!res.ok) throw new Error("Oops! An error has occured");
              const json = await res.json();
              const data= json.hits;
      
              console.log(data);
      
              setList(data);
            }catch (error) {
              console.log(error,"Can't Find the recipes right now!!, try checking recipe Id or the auth_ids and Keys!!!");
            }
          };
          getData();
    },[searchStr])

    async function handleSubmit(e){
        e.preventDefault(); 
        // const data = await useFetchdata({searchStr});
        // setList(data);       
        // console.log(searchStr);
    }
    const handleButtonClick = () => {
        setSearchstr(document.getElementById('searchInput').value);
        console.log(searchStr);
    }

    // function getIds(){   
    // }
    function extractRecipeID(uri) {
        const regex = /#recipe_(.*)/;
        const match = uri.match(regex);
        return match ? match[1] : null;
    }
    
    return(
        <div className="main px-[4vmin] py-[4vmin]">    
        
            <div className=''>
            {/* <p className="text-lg">What are you hungry for?</p> */}
            <form className='flex justify-center gap-1' onSubmit={(e) => handleSubmit(e) }>         
                <input id="searchInput" className='input_string rounded-lg border w-96 px-5 py-2 focus:outline-none text-black   ' placeholder='Dish or major ingredients'/>
                <button className='px-5 py-2 rounded-lg bg-gray-400 text-white hover:bg-gray-600 active:bg-gray-400' 
                    type='button'
                    onClick={handleButtonClick}
                >
                        Search
                </button>
            </form>

            </div>
            
            <div className='result_container mt-10 flex flex-wrap justify-center gap-4'>
                {list && list.map((item)=>{
                    const key= extractRecipeID(item.recipe.uri);
                    // console.log(key);
                    return <Card key={key} setasID={key} item={item.recipe} />
                })}
            </div>
        </div>

    );
}

export default Home;