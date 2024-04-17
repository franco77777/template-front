import "./excalidrawFiles.css"
import TrafficLight from "./trafficLight";
const Process = ({title}) =>{
    return <div className="w-full  bg-purple-400 mt-10 font-mono p-4 overflow-x-auto">
        <h4 className="text-lg">{title}</h4>
        <div className="bg-purple-600 w-full h-[330px] gridProcess gap-4 text-base text-white ">
           <div className="bg-purple-900 rounded-xl process1">UI_UX</div>
           <div className="bg-purple-900 rounded-xl process2">IA</div>
           <div className="bg-purple-900 rounded-xl process3">Front End</div>
           <div className="bg-purple-900 rounded-xl process4">Back End</div>
           <div className="bg-purple-900 rounded-xl process5">Devops</div>
           <div className="bg-purple-900 rounded-xl process6">QA</div>
           <div className="bg-purple-900 rounded-xl process7">Marketing</div>
           <div className="bg-purple-900 rounded-xl process8">Documents</div>
           <div className="bg-purple-900 rounded-xl process9 relative flex justify-center p-10 min-h-max h-fit ">
            
            <TrafficLight color={"green"}/>
             <div className=" text-white bg-purple-400 rounded-lg ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quis eligendi nemo sapiente adipisci vitae dolorem id, similique quas! Ex quidem quis ad dolorum dolore corrupti distinctio voluptate eveniet eos.
             </div>
           </div>
        </div>
    </div>
}

export default Process;