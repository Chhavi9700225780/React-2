
import { NavLink } from "react-router-dom";
import background from '/bg.jpg.jpeg'
const Home = ()=>{
  return(
    <div className="  relative  ">
   
      
        <img src={background}  className=" w-full  bg-no-repeat  bg-cover "/>
         <h2 className="spider  text-yellow-300 tracking-wide text-7xl absolute top-[39%] left-[32%]">SENSE HACKER</h2>
        <NavLink to="/levels">
        <button className="ping absolute w-[17%]  bg-pink-500   rounded-lg  px-7 p-1  top-[54%] left-[40%] ">
           <h1 className="spider text-4xl tracking-wide">PLAY NOW</h1>
        </button>
  </NavLink>
  
    </div>
  )
};

export default Home;