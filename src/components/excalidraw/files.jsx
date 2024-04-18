import { Button, FileInput, Label } from "flowbite-react";
import { useState,useCallback, useRef } from "react";
import {useDropzone} from 'react-dropzone'

const Files = ({slide,setSlide}) =>{
    const [file, setFile] = useState();
    const [images, setImages] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null)
    const selectFiles = () =>{
        fileInputRef.current.click()
    }

    const onFileSelect = (event) =>{
        console.log("soy images", images);
        const files = event.target.files;
        
        if(files.length === 0) return;
        for (let i = 0; i < files.length; i++) {
           
            if(files[i].type.split("/")[0] !== "image") continue;
            if(!images.some (e => e.name === files[i].name)){
                setImages((prevImages)=> [
                    ...prevImages,{
                        name:files[i].name,
                        url:URL.createObjectURL(files[i])
                    }
                ])
            }
            
        }
        
    }

    const deleteImage = (index) =>{
     
    const newImages = [...images.filter((_,i)=> i !== index)]
    setImages(newImages)
    
    }

    const onDragOver = (event) =>{
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy"
    }
    const onDragLeave = (event) =>{
        event.preventDefault();
        setIsDragging(false)
    }

    const onDrop =(event)=>{
    event.preventDefault();
    setIsDragging(false)
    const files = event.dataTransfer.files;
        
        if(files.length === 0) return;
        for (let i = 0; i < files.length; i++) {
           
            if(files[i].type.split("/")[0] !== "image") continue;
            if(!images.some (e => e.name === files[i].name)){
                setImages((prevImages)=> [
                    ...prevImages,{
                        name:files[i].name,
                        url:URL.createObjectURL(files[i])
                    }
                ])
            }
            
        }
    }
    
    return <div 
    style={{ right: slide.files }}
    className="bg-green-500 w-full h-full flex  transition-all duration-300 absolute top-0">
       <div className="flex flex-col w-full items-center justify-center">
      <Label
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        htmlFor="dropzone-file"
        className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"

        
      >
        <div className="flex flex-col items-center justify-center pb-6 pt-5" >
          <svg
            className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        
        {isDragging ? (<span>drop images here</span>) : (
            <>Drag Drop images here or
            <span onClick={selectFiles} >browse</span>
            </>
        )}
<input type="file"  ref={fileInputRef} multiple onChange={(e)=>onFileSelect(e)}  />
    
      </Label>
      {/* <FileInput id="dropzone-file" className="hidden" onChange={(e) => setFile(e.target.files[0])}/> */}
      
        
      
      <div className="w-full h-48 flex gap-12 mt-4">
        {images.map((images,index)=>
            <div key={index} className="w-32 h-full hover:overflow-visible overflow-hidden flex flex-col justify-center items-center">
                
                <img src={images.url} alt={images.name} className="h-32 "/>
                
                <span onClick={()=> deleteImage(index)} className="text-sm text-clip">{images.name}</span>
            </div>
        )}
      </div>
      <Button color="blue" className="opacity-0 pointer-events-none">Continuar</Button>
          <Button onClick={()=> setSlide({...slide,formContact:"100%",files:"0%"})} color="blue" className="absolute right-0 bottom-0">Continuar</Button>
    </div>
    
    </div>
}
export default Files;