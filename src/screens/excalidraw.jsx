import { useState } from "react";
import Login from "@/components/excalidraw/login";
import Welcome from "@/components/excalidraw/welcome";
import FormData from "@/components/excalidraw/formData";
import Wallet from "@/components/excalidraw/wallet";
import FormContact from "@/components/excalidraw/formContact";
import Files from "@/components/excalidraw/files";

const Excalidraw = () =>{
    const [slide, setSlide] = useState({
        login:"0%",
        welcome:"-100%",
        formData:"-100%",
        wallet:"-100%",
        formContact:"-100%",
        files:"-100%"
    });
    return <div className="bg-red-500 min-w-[100vw] min-h-[100vh] rounded-2xl font-mono ">
        <div className="w-[80vw] h-[80vh] bg-black absolute top-[50%] left-[50%] center-translate rounded-2xl overflow-hidden" >
            <div className="relative w-full h-full">
           < Login slide={slide} setSlide={setSlide}/>  
         < Welcome slide={slide} setSlide={setSlide}/>
         <FormData slide={slide} setSlide={setSlide}/>
         <Wallet slide={slide} setSlide={setSlide}/>
         <FormContact slide={slide} setSlide={setSlide}/>
         <Files slide={slide} setSlide={setSlide}/>
         
         </div>
        </div>
    </div>
}

export default Excalidraw;