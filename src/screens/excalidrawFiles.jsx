
import FirstFiles from "@/components/excalidrawFiles/firstFiles";
import Process from "@/components/excalidrawFiles/process";

const ExcalidrawFiles = () =>{
    return <div className="w-full min-h-[100vh] bg-red-600 p-4 px-8 ">
        
        <h3 className="bg-blue-500 rounded-lg">Conserje</h3>
        
        <FirstFiles/>
        <Process title={"Process"}/>
        <Process title={"Corrections"}/>
    </div>
}

export default ExcalidrawFiles;