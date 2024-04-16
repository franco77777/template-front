import { Button, Label, TextInput } from "flowbite-react";

const formContact = ({slide,setSlide}) =>{
  
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
      <div className="flex gap-2 cursor-pointer items-center">
      
      <img src="./icons/add.svg" alt="add" width={30} height={30} />
      <span className="font-medium text-base">
      add social network
        
        
      </span>
      </div>
      <Button color="blue" className="opacity-0 pointer-events-none">Continuar</Button>
          <Button onClick={()=> setSlide({...slide,formContact:"100%"})} color="blue" className="absolute right-0 bottom-0">Continuar</Button>
    </form>
    </div>
}

export default formContact;