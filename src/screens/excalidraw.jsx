import { useState } from "react";
import Login from "../components/excalidraw/login";
import Welcome from "../components/excalidraw/welcome";

const Excalidraw = () =>{
    const [slide, setSlide] = useState({
        login:"0",
        welcome:"100"
    });
    return <div className="bg-red-500 min-w-[100vw] min-h-[100vh] rounded-2xl font-mono">
        <div className="w-[80vw] h-[80vh] bg-black absolute top-[50%] left-[50%] center-translate rounded-2xl overflow-hidden" >
         {/* < Login slide={slide} setSlide={setSlide}/> */}
         < Welcome slide={slide} setSlide={setSlide}/>
        </div>
    </div>
}

export default Excalidraw;