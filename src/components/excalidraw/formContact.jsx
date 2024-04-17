import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

const formContact = ({slide,setSlide}) =>{
  const [openModal, setOpenModal] = useState(false);
  const [socialList, setSocialList] = useState([]);
  const [social, setSocial] = useState({name:"",link:""});

 
  
  function onCloseModal() {
    setOpenModal(false);
    
  }

  const AddSocial = () =>{
    socialList.push(social)
    console.log(social);
    console.log(socialList);
    setOpenModal(false)
  }
  
  const removeSocial = (e) =>{
    
    const test = [...socialList]
    test.splice(e,1)
     setSocialList(test)
    
  }
    return <div 
    style={{ right: slide.formContact }}
    className="bg-green-500 w-full h-full flex  transition-all duration-300 absolute top-0">
       <form className="rounded-xl p-4 flex max-w-md flex-col gap-4 absolute bg-orange-400 w-[80%]  top-[50%] left-[50%] center-translate">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="linkedin1" value="Linkedin" />
        </div>
        <TextInput id="linkedin1" type="text" placeholder="name@flowbite.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="discord1" value="Discord" />
        </div>
        <TextInput id="discord1" type="text" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="telegram1" value="Telegram" />
        </div>
        <TextInput id="telegram1" type="text" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="github1" value="Github" />
        </div>
        <TextInput id="github1" type="text" required />
      </div>
      <div>
        {socialList.map((e,i) => <div key={i} className=" flex gap-4 text-sm ">
          <span>{e.name}</span>
          <span>{e.link}</span>
          <button onClick={() =>removeSocial(i)}>
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" class="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>)}
      </div>
      <Button onClick={() => setOpenModal(true)} color="success">
      <div className="flex gap-2 cursor-pointer items-center">
      
      <img src="./icons/add.svg" alt="add" width={30} height={30} />
      <span className="font-medium text-base">
      add social network
        
        
      </span>
      </div>
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup className="font-mono">
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Social Network</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="social1" value="name" />
              </div>
              <TextInput
                id="social1"
                
                value={social.name}
                onChange={(event) => setSocial({...social,name:event.target.value})}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="link1" value="link" />
              </div>

              <TextInput id="link1" type="text" required 
              onChange={(event) => setSocial({...social,link:event.target.value})} />
            </div>
           
            <Button onClick={AddSocial} color="success">Add</Button>
            
          </div>
        </Modal.Body>
      </Modal>
      <Button color="blue" className="opacity-0 pointer-events-none">Continuar</Button>
          <Button onClick={()=> setSlide({...slide,formContact:"100%",files:"0%"})} color="blue" className="absolute right-0 bottom-0">Continuar</Button>
    </form>
    </div>
}

export default formContact;