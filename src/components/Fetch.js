import { useEffect, useState } from "react";
import { api_id,api_key,type } from "./API_AUTH_KEYS";

const Fetchdata = (props) => {
  const [recipies, setRecipies] = useState([]);
  const base_url= "https://api.edamam.com/api/recipes/v2";
  const auth= `app_id=${api_id}&app_key=${api_key}&type=${type}`;

  useEffect(() => {
    const getData = async () => {
      try{
        if(props.id !== ""){ 
            const res = await fetch(url+'/'+props.id+'?'+auth);
        }
        if(props.q !==""){
            const res = await fetch(`${url}?${type}&q=${props.q}&${auth}`);
        }
        if (!res.ok) throw new Error("Oops! An error has occured");
        const json = await res.json();
        const data= json.hits;
        setRecipies(data);
      } catch (error) {
        console.log("Can't Find the recipes right now!!, try checking recipi Id or the auth_ids and Keys!!!")
      }
      
    };
    getData();
  }, []);

  return recipies;
};

export default Fetchdata;
