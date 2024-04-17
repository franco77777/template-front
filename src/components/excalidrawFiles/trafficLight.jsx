import "./excalidrawFiles.css"
const TrafficLight = ({color}) =>{

    return <div className="bg-black w-28 h-10 rounded-lg flex justify-center items-center gap-2 absolute top-0">
        <div className={`${color === "green" ? "bg-[#16FF00]" : "bg-slate-400"} rounded-full  w-6 h-6 `}></div>
        <div className={`${color === "yellow" ? "bg-[#FAEF5D]" : "bg-slate-400"} rounded-full  w-6 h-6 `}></div>
        <div className={`${color === "red" ? "bg-red-600" : "bg-slate-400"} rounded-full  w-6 h-6 `}></div>
        </div>
}
export default TrafficLight;