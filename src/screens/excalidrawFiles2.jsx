import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

const ExcalidrawFiles2 = () => {
    const [openModal, setOpenModal] = useState(false);
    
    const [newFile, setNewFile] = useState({name:""});
    
    const AddNewFile = () =>{
      
        
        list.push(newFile)
        setOpenModal(false)
        
        console.log("soy new file", newFile);
        
      }
    const [list, setList] = useState([{name:"Personal"},{name:"Projects"},{name:"Automations"},{name:"Deployments"},
    {name:"Access"},{name:"Access API"},{name:"Assignments"},{name:"Hardware"},{name:"Tasks"},{name:"Schedules"},{name:"Dazsync"}]);

    function onCloseModal() {
        setOpenModal(false);
        
      }
    return <div className="w-full min-h-[100vh] bg-red-600 p-4 px-8 font-mono flex flex-col">
        <header className="relative w-full bg-green-400 min-h-12 rounded-xl flex items-center md:px-8 px-4 justify-between">
            <h3 className="bg-blue-500 rounded-lg h-full text-lg sm:text-3xl">Gravitad</h3>
            
            <div className="flex relative h-7 rounded-lg  w-[30%]  ">
            <input type="text" id="search" className="w-full rounded-lg "/> 
            <img src="../public/icons/search.svg" alt="" className="w-6 h-6 absolute top-[50%] right-2 center-top pointer-events-none" />
            </div>
            
          <div className="flex gap-2">
          <img className="w-7 h-7 sm:w-10 sm:h-10" src="../public/icons/users-group.svg" alt="" />
          <img className="w-7 h-7 sm:w-10 sm:h-10" src="../public/icons/users-group.svg" alt="" />
          <img className="w-7 h-7 sm:w-10 sm:h-10" src="../public/icons/cfg.svg" alt="" />
          </div>
          </header>

          {/* <---------------------------------------BODY-------------------------------> */}
          <div className="bg-orange-500 w-full grow mt-4 text-base md:px-8 px-4 gap-2 grid grid-cols-2 auto-rows-[150px] sm:grid-cols-3 sm:auto-rows-[200px]">
              {list.map((e,i)=><div key={i} className="bg-yellow-200 rounded-lg">{e.name}</div>)}
              <div className="bg-purple-500 rounded-lg" >
              <Button onClick={() => setOpenModal(true)} color="purple" className="p-0 w-full h-full focus:ring-0">
      <div className="flex gap-2 cursor-pointer items-center">
      
      <img src="./icons/add.svg" alt="add" width={30} height={30} />
      <span className="font-medium text-base">
      Add
        
        
      </span>
      </div>
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup className="font-mono">
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            
            <div>
              <div className="mb-2 block">
                <Label htmlFor="title1" value="Title" />
              </div>
              <TextInput
                id="title1"
                
                
                onChange={(event) => setNewFile({...newFile,name:event.target.value})}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="input1" value="input" />
              </div>

              <TextInput id="input1" type="text" required 
              onChange={(event) => setNewFile({...newFile,input:event.target.value})} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="input2" value="input" />
              </div>

              <TextInput id="input2" type="text" required 
              onChange={(event) => setNewFile({...newFile,input2:event.target.value})} />
            </div>
           
            <div>
              <div className="mb-2 block">
                <Label htmlFor="input3" value="input" />
              </div>

              <TextInput id="input3" type="text" required 
              onChange={(event) => setNewFile({...newFile,inpu3:event.target.value})} />
            </div>
           
            <div>
              <div className="mb-2 block">
                <Label htmlFor="input4" value="input" />
              </div>

              <TextInput id="input4" type="text" required 
              onChange={(event) => setNewFile({...newFile,input4:event.target.value})} />
            </div>
           
           
            <Button onClick={AddNewFile} color="success">Add</Button>
            
          </div>
        </Modal.Body>
      </Modal>
              </div>
          </div>
    </div>
}

export default ExcalidrawFiles2