import { useEffect, useState } from "react";
import SidebarElementor from "@/components/elementor/sidebarElementor";
import WorkAreaElementor from "../components/elementor/workAreaElementor";

const Elementor = () =>{
    const [inputText, setInputText] = useState();
   
    var dropzoneId = "dragZone";

    window.addEventListener("dragenter", function(e) {
      if (e.target.id != dropzoneId) {
        e.preventDefault();
        e.dataTransfer.effectAllowed = "none";
        e.dataTransfer.dropEffect = "none";
      }
    }, false);
    
    window.addEventListener("dragover", function(e) {
      if (e.target.id != dropzoneId) {
        e.preventDefault();
        e.dataTransfer.effectAllowed = "none";
        e.dataTransfer.dropEffect = "none";
      }
    });
    
    window.addEventListener("drop", function(e) {
      if (e.target.id != dropzoneId) {
        e.preventDefault();
        e.dataTransfer.effectAllowed = "none";
        e.dataTransfer.dropEffect = "none";
      }
    });
    
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
        const dataTransfer = e.dataTransfer.getData('id', e.target.id);
        if(dataTransfer === "text"){
            const input = document.createElement('input');
         input.classList.add("w-42")
         input.id= "input"
        input.addEventListener('input', TextInput)
        input.addEventListener("keypress", TextEnter)
        
        
        //const id = e.dataTransfer.getData('id');
        console.log("soy drop");
        e.target.appendChild(input);
       
        
        } else {
            e.preventDefault()
            files = e.dataTransfer.files
            console.log("soy drop222", e.dataTransfer.files);
            showFiles(e.dataTransfer.files)
            const InputImage = document.getElementById('inputImage');
            InputImage.close()
        }
        
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
      let files;
      useEffect(()=>{
        const DragZone = document.getElementById('dragZone');
        const InputImage = document.getElementById('inputImage');
        const ImageButton = document.getElementById('imageButton');
        ImageButton.addEventListener("click", (e)=>{
            e.stopImmediatePropagation()
            InputImage.click()
           console.log("soy button");
          })
          InputImage.addEventListener("change",(e)=>{
            e.preventDefault()
            console.log("soy files", this.files);
            files = this.files
          })

          
      },[])

      function showFiles (files){
        if(files.length === undefined){
            
            processFile(files)
        } else {
            for(const file of files){
                processFile(file);
            }
        }
      }

      function processFile(file){
        const DragZone = document.getElementById('dragZone');
    
        const docType = file.type;
        const validExtensions = ["image/jpeg","image/jpg","image/png","image/gif"]
        if(validExtensions.includes(docType)){
         const fileReader = new FileReader();
         const id = `file-${Math.random().toString(32).substring(7)}`
         function buttonClicked()
{
  console.log("You son of a gun, you did it");
}
         fileReader.addEventListener("load", (e)=>{
            const fileUrl = fileReader.result;
            const image = `
            <div id="${id}" class="w-12" onclick='buttonClicked()'>
             <img src="${fileUrl}" alt=""  />
             <span>${file.name}</span>
            </div>`

            DragZone.innerHTML += image;
         })
         fileReader.readAsDataURL(file)
         UploadFile(file,id)
        } else {
            alert("no es un archivo valido")
        }
      }

      function UploadFile (){

      }
    return <div className="w-full min-h-lvh bg-red-500 flex">
        <SidebarElementor/>
        <WorkAreaElementor/>
       
        
    </div>
}

export default Elementor;