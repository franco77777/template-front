import { Button, Label, TextInput } from "flowbite-react";

const Wallet = ({slide,setSlide}) =>{
    return <div 
    style={{ right: slide.wallet }}
    className="bg-green-500 w-full h-full flex  transition-all duration-300 absolute top-0">
       <form className="rounded-xl p-4 flex max-w-md flex-col gap-4 absolute bg-orange-400 w-[80%]  top-[50%] left-[50%] center-translate">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="red1" value="Red" />
        </div>
        <TextInput id="red1" type="text" placeholder="name@flowbite.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="wallet1" value="Wallet" />
        </div>
        <TextInput id="wallet1" type="text" required />
      </div>
      
      <Button color="blue" className="opacity-0 pointer-events-none">Continuar</Button>
          <Button onClick={()=> setSlide({...slide,wallet:"100%",formContact:"0%"})} color="blue" className="absolute right-0 bottom-0">Continuar</Button>
    </form>
    </div>
}

export default Wallet;