import { useEffect, useState } from "react";

const Elementor = () =>{
    const [inputText, setInputText] = useState();
    
    useEffect(()=>{
        const Text = document.getElementById('text');
    const DragZone = document.getElementById('dragZone');
       

        
    Text.addEventListener('dragstart', e => {
        //e.stopImmediatePropagation()
        e.dataTransfer.setData('id', e.target.id);
        //console.log("data", e);
    });

    

    DragZone.addEventListener('dragover', e => {
        e.preventDefault();
        //e.dataTransfer.dropEffect = 'copy';
        console.log("dragover")
        //e.target.classList.add('hover');
    });

    DragZone.addEventListener('dragleave', e => {
        
        console.log("dragleave");
        //e.target.classList.remove('hover');
    });
    DragZone.addEventListener('drop', e => {
        e.stopImmediatePropagation()
        
        const input = document.createElement('input');
         input.classList.add("w-42")
         input.id= "input"
        input.addEventListener('input', TextInput)
        input.addEventListener("keypress", TextEnter)
        
        
        //const id = e.dataTransfer.getData('id');
        console.log("soy drop");
        e.target.appendChild(input);
       
        
    });
   
    const TextEnter = (e) =>{
        
        if (e.key === "Enter") {
            console.log("soy enter", e.target.value);
       const div = document.createElement("div")
       div.classList.add("w-24")
      div.classList.add("bg-red-500")
      div.append(e.target.value)
       
       DragZone.appendChild(div)
       e.target.remove()
        }
        
      }

      
    
    },[])
   
   
    function TextInput (e) {
        setInputText(e.target.value)
        console.log("soy input",e.target.value);
      };
      
    return <div className="w-full min-h-lvh bg-red-500 flex">
        <div className="w-1/2 grow bg-purple-500">
            <div className="bg-purple-600 text-white" id="text" draggable={true} >Text</div>
            <div onClick={()=>console.log("soy inputtext",inputText)}>BUTTON</div>
        </div>
        <div className="w-1/2 grow bg-blue-500 " id="dragZone">
         {/* <input type="text" className="w-24" onChange={TextInput} /> */}
        </div>
    </div>
}

export default Elementor;