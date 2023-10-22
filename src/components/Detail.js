import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api_id,api_key,type } from "./API_AUTH_KEYS";


const Details = ()=>{
    const routeParams= useParams();
    const [data,setData] = useState({});
    // console.log(routeParams.id);

    const base_url= "https://api.edamam.com/api/recipes/v2";
    const auth= `app_id=${api_id}&app_key=${api_key}&type=${type}`;

    useEffect(()=>{
        const getData = async () => {
            try{
              const  res = await fetch(`${base_url}/${routeParams.id}?${type}&${auth}`);
              if (!res.ok) throw new Error("Oops! An error has occured");
              const json = await res.json();
      
              console.log(json);
              setData(json);

            }catch (error) {
              console.log(error,"Can't Find the recipes right now!!, try checking recipe Id or the auth_ids and Keys!!!");
            }
          };
          getData();
    },[]);

    return(
        <div className="details px-[4vmin] py-[4vmin] border ">
            <div className="container min-w-full h-auto border-red-700 border h-4">
                    <div className="row flex ">
                        <img className="object-cover w-full md:min-h-[190px] md:min-w-[190px] md:h-auto md:w-56 " 
                            src={data.recipe.image} alt="N/A"
                        />
                        <div className="flex flex-col gap-4">
                            <p className="px-4 py-2 text-2xl font-semibold">{data.recipe.label}</p>
                            {
                                data.recipe.healthLabels.array.map(element => {
                                    return <div className="mx-2">{element}</div>
                                })
                            }
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Details;