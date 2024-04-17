
import { useState } from "react";
import TrafficLight from "./trafficLight";
import "./excalidrawFiles.css"

const FirstFiles = () =>{
    const [color, setColor] = useState("green");
    return <div className="gridFiles gap-4 bg-orange-400  mt-10 text-base font-mono">
        <div className="bg-lime-500 rounded-md w-full flex justify-center items-center flex-col gap-2 relative">
            <TrafficLight color={color}/>
            <div className="w-full overflow-auto bg-yellow-200 rounded-md mt-10">
              <h4>Front End</h4>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolores voluptate repellat, laborum voluptates nostrum unde quis error quos iure quam consequuntur modi aperiam natus deleniti tenetur aspernatur? Porro, laborum.</span>
            </div>
            
        </div>
        <div className="bg-lime-500 rounded-md relative flex justify-center items-center flex-col gap-2">
        <TrafficLight color={color}/>
        <div className="w-full overflow-auto bg-yellow-200 rounded-md mt-10">
              <h4>Back End</h4>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolores voluptate repellat, laborum voluptates nostrum unde quis error quos iure quam consequuntur modi aperiam natus deleniti tenetur aspernatur? Porro, laborum.</span>
            </div>
            </div>
        <div className="bg-lime-500 rounded-md relative flex justify-center items-center flex-col gap-2">
        <TrafficLight color={color}/>
        <div className="w-full overflow-auto bg-yellow-200 rounded-md mt-10">
              <h4>IA</h4>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolores voluptate repellat, laborum voluptates nostrum unde quis error quos iure quam consequuntur modi aperiam natus deleniti tenetur aspernatur? Porro, laborum.</span>
            </div>
            </div>
        <div className="bg-lime-500 rounded-md relative">
            Figma
        </div>
        <div className="bg-lime-500 rounded-md relative">
            Excalidraw
        </div>
        <div className="bg-lime-500 rounded-md relative">
            Documento de Analisis
        </div>
    </div>
}

export default FirstFiles;