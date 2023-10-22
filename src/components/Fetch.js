import { useEffect, useState } from "react";

const Fetchdata = () => {
  const [recipies, setRecipies] = useState([]);
  const base_url="https://api.edamam.com/api/recipes/v2";

  useEffect(() => {
    const getData = async () => {
      const res = await fetch();
      if (!res.ok) throw new Error("Oops! An error has occured");
      const json = await res.json();

      setRecipies(json);
    };
    getData();
  }, []);

  return recipies;
};

export default Fetchdata;
