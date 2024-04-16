import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const FormData = ({slide,setSlide}) =>{
    const [value, setValue] = useState()

  
    return <div 
    style={{ right: slide.formData }}
    className="bg-green-500 w-full h-full relative transition-all duration-300">
        <form className="rounded-xl p-4 flex max-w-md flex-col gap-4 absolute bg-orange-400 w-[80%]  top-[50%] left-[50%] center-translate">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="country1" value="Country" />
        </div>
        <TextInput id="country1" type="email" placeholder="name@flowbite.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="address1" value="Address" />
        </div>
        <TextInput id="address1" type="password" required />
      </div>
      <div>
      <Label htmlFor="phone" value="Phone" />
      <PhoneInput
      id="phone"
  international
  defaultCountry="RU"
  value={value}
  onChange={setValue}/>
      </div>
      <Button color="blue" className="opacity-0 pointer-events-none">Continuar</Button>
          <Button onClick={()=> setSlide({...slide,formData:"100%",wallet:"0%"})} color="blue" className="absolute right-0 bottom-0">Continuar</Button>
    </form>
    </div>
}

export default FormData;