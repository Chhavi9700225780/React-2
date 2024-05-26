import { NavLink } from "react-router-dom";
import card from '/card4.png'

const Levels=()=>{
    return(
        <div className="w-full h-[100vh] bg-back">


            <section className="bg-back  flex flex-col justify-between items-center mx-auto">

                 <h1  className="spider mt-8 text-3xl tracking-wide spider2 text-yellow-300">Welcome  to  sense  hacker  game</h1>
                 <p className="text-white text-sm">Play all the levels to know more about the cyber Security ....</p>
              
                <div className="  max-w-[1080px]  gap-7 mt-16 flex flex-row justify-between items-center mx-auto">
          
                    <div className="flex flex-col   max-w-[1080px] ">

                        <h2 className="spider self-center spider2 text-xl text-yellow-300">Level 1</h2>
                        <div className=" mt-3  bg-gray-700 p-3">
                            <img src={card} width="1080px" height="1080px"  className="self-center pop object-cover" />
                        </div>
                        <div className="self-center mt-5">
                         <NavLink to="/game">
                            <button className="   bg-pink-400   rounded-lg  px-7 p-1   ">
                            <h1 className="spider  text-xl font-medium tracking-wide">Start</h1>
                            </button>
                         </NavLink>
                        </div>
                 </div>


            <div className=" flex flex-col max-w-[1080px]">
  <h2 className="spider spider2 text-xl self-center text-yellow-300">Level 2</h2>
  <div className=" mt-3  bg-gray-700 p-3">
                   <img src={card} width="1080px" height="1080px"  className="self-center pop object-cover" />
            </div>
             <div className="self-center mt-5">
            <NavLink to="/game">
        <button className="   bg-pink-400   rounded-lg  px-7 p-1   ">
           <h1 className="spider  text-xl font-medium tracking-wide">Start</h1>
        </button>
  </NavLink>
  </div>
            </div>


            <div className=" flex flex-col">
            <h2 className="spider self-center spider2 text-xl text-yellow-300">Level 3</h2>
            <div className=" mt-3  bg-gray-700 p-3">
                   <img src={card} width="1080px" height="1080px"  className="self-center  pop object-cover" />
            </div>
            <div className="self-center mt-5">
            <NavLink to="/game">
        <button className="   bg-pink-400   rounded-lg  px-7 p-1   ">
           <h1 className="spider  text-xl font-medium tracking-wide">Start</h1>
        </button>
  </NavLink>
  </div>
            </div>


            <div className=" flex flex-col">
            <h2 className="spider self-center spider2 text-xl text-yellow-300">Level 4</h2>
            <div className=" mt-3  bg-gray-700 p-3">
                   <img src={card} width="1080px" height="1080px"  className="self-center pop object-cover" />
            </div>
            <div className="self-center mt-5">
            <NavLink to="/game">
        <button className="   bg-pink-400   rounded-lg  px-7 p-1   ">
           <h1 className="spider  text-xl font-medium tracking-wide">Start</h1>
        </button>
  </NavLink>
  </div>
            </div>

                </div>
            </section>
  
      
        </div>
    )
};
export default Levels;