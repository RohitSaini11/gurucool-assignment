const Navbar=()=>{
    return(
        <div className="navbar px-[4vmin] h-20 flex items-center justify-between shadow-md">
            <div className="logo flex gap-2 items-center"> 
                <p className="border-r-2 border-black pr-2 text-4xl font-bold">RFA</p> 
                <p className="text-sm leading-3">Recipe <br/>Finder<br/> Application </p>
            </div>
            <a href="#">Saved Recipies</a>
        </div>
    );
}

export default Navbar;