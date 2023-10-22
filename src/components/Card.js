import image from "../images/potato.png";
// import placeholder_img from "../images/....";

const Card= () => {
    return(    
            <a href="#" className="mt-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                <img className="object-cover w-full rounded-t-lg h-96 md:min-h-[190px] md:min-w-[190px] md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt="No Image" /   >
                <div className="flex flex-col justify-between p-2 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Healthy & Delicious: Curried Sweet Potato and Brown Rice Soup Recipe</h5>
                    {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}

                    <div className="flex gap-4 text-white"> 
                        <div className="border-white-600 border py-1 px-2 rounded-full text-gray-900 dark:text-white ">CUISINE_TYPE</div>
                        <div className="border-white-600 border py-1 px-2 rounded-full text-gray-900 dark:text-white ">MEAL_TYPE</div>
                        <div className="border-white-600 border py-1 px-2 rounded-full text-gray-900 dark:text-white animate-pulse">CALORIES</div>
                    </div>    
                </div>
                
            </a>
    );
}

export default Card;