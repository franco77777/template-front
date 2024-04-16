import { Button, Checkbox, Label, TextInput } from "flowbite-react";



const Login = ({slide,setSlide}) =>{
    
    return <div className={`bg-green-500 w-full h-full flex ml-[${slide.login}%] transition-all duration-300`}>
        <div className="w-1/2 h-full bg-blue-500">IMAGE</div>
        <div className="w-1/2 h-full p-8 relative">
        <form className="flex max-w-md flex-col gap-4 absolute bg-orange-400 w-[80%]  top-[50%] left-[50%] center-translate">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button onClick={()=> setSlide({...slide,login:"-100"})}type="submit" color="blue" className="">Submit</Button>
    </form>
        </div>
    </div>
}
export default Login;