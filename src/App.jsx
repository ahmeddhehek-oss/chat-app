import React from "react";
import Login  from "./components/Login";
import Register from "./components/Register";
import Navlinks from "./components/Navlinks";
import Chatbox from "./components/Chatbox";
import Chatlist from "./components/Chatlist";


const App = () => {
    return (
        <div>
            <div className="flex lg:flex-row flex-col items-start w-[100%]">
         <Navlinks/> 
           <Chatbox/> 
           <Chatlist/> 
            </div>
            <div className="hidden">
                    
         <Login/> 
         <Register/>
            </div>
      
        </div>
    )
}

export default App;