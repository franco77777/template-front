import { Button } from "flowbite-react";
const Welcome = () =>{
    return <div className="text-white flex p-4 h-full">
        <div className="flex flex-col w-1/3 ">
            <h3>Bienvenido Nombre y Apellido</h3>
            <span>image here</span>
        </div>
        <div className="w-2/3 text-sm bg-orange-500 relative  ">
            <div className="top-[50%] left-[50%] center-translate absolute bg-green-500 rounded-xl w-[90%] p-12 ">
          <span>
            Por favor termina de completar tus datos, toma en cuenta que debes tener,
            resumen curricular, documento de identidad de tu pais, de poseer un
            documento de identidad que verifique tu direccion como en Venezuela el R.I.F,
            si tu documento de identidad tiene tu direccion fiscal, solo el documento de identidad, 
            tambien debes de poseer tu wallet a la que los pagos seran asociados,
            deber ser USDT en la red de tron, TRC20
          </span>
          <Button color="blue" className="opacity-0 pointer-events-none">Continuar</Button>
          <Button color="blue" className="absolute right-0 bottom-0">Continuar</Button>
          </div>
        </div>
    </div>
}
export default Welcome;