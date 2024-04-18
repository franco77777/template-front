import TrafficLight from "@/components/excalidrawFiles/trafficLight";

const ExcalidrawFilesSection = () =>{
    return <div className="w-full min-h-[100vh] bg-red-600 md:p-12 p-6 ">
             {/* <-------------------------------HEADER-------------------> */}
            <header className="relative w-full bg-green-400 min-h-12 rounded-xl flex items-center md:px-8 px-4 justify-between">
            <h3 className="bg-blue-500 rounded-lg h-full">Conserje</h3>
            <TrafficLight color={"green"} styles={{top:"50%"}} newclass={"center-translate"}/>
          <div className="flex gap-2">
          <img className="w-10 h-10" src="../public/icons/users-group.svg" alt="" />
          <img className="w-10 h-10" src="../public/icons/users-group.svg" alt="" />
          </div>
          </header>

           {/* <-------------------------------BODY-------------------> */}
          <div className="w-full h-full bg-orange-400 min-h-[87vh] md:mt-8 mt-4 rounded-xl p-4 md:p-8">
            <h4>Process History</h4>
            
           <div className="flex w-full gap-3 items-end">
            <div className="flex relative h-7 rounded-lg mt-4 w-[80%] gap-3 ">
            <input type="text" id="search" className="w-full rounded-lg"/> 
            <img src="../public/icons/search.svg" alt="" className="w-6 h-6 absolute top-[50%] right-2 center-top pointer-events-none" />
            </div>
            <select
              defaultValue="All"
              
              className=" cursor-pointer   w-[20%] h-7 rounded-md  text-sm py-0 px-2 m-0 font-medium  text-black"
              
            >
              <option value="All">All</option>
              <option value="newtab">newtab</option>
              <option value="sametab">sametab</option>
              <option value="parent">parent</option>
              <option value="top">top</option>
              <option value="modal">modal</option>
              <option value="workspace">workspace</option>
            </select>
            </div>
            <div className="w-full h-full text-base font-medium bg-blue-500 mt-8 flex gap-2 justify-between">
            <span>project code</span>
            <span>user</span>
            <span>department</span>
            <span>state</span>
            <span>start date</span>
            <span>end date</span>
          </div>
          <div className="w-full min-h-[60vh] bg-green-500 mt-2 rounded-lg"></div>
          </div>
          
    </div>
}

export default ExcalidrawFilesSection;
