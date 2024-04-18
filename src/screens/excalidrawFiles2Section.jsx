import ModalNewUser from "../components/excalidrawFiles2/modalNewUser";

const ExcalidrawFiles2Section = () =>{
    return <div className="w-full min-h-[100vh] bg-red-500 md:p-12 p-6 flex flex-col">
        <div className="bg-orange-500 w-full h-full grow rounded-2xl flex flex-col">
            <header className="">
                <h3>Personal</h3>
            <div className="w-full bg-blue-500 h-8 rounded-lg flex  justify-between items-center px-1 ">
                <ModalNewUser/>
                <img src="../public/icons/cfg.svg" alt="" className="w-6"/>
            </div>
            </header>
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
            <span>id</span>
            <span>user</span>
            <span>position</span>
            <span>country</span>
            <span>start date</span>
            <span>end date</span>
          </div>
          <div className="bg-green-500 w-full grow mt-4 rounded-xl">

          </div>
            
        </div>
        
    </div>
}

export default ExcalidrawFiles2Section;