// import { Button, FileInput, Label } from "flowbite-react";
// import { useState,useCallback, useRef } from "react";
// import {useDropzone} from 'react-dropzone'

// const Files = ({slide,setSlide}) =>{
//     const [file, setFile] = useState();
//     const [images, setImages] = useState([]);
//     const [isDragging, setIsDragging] = useState(false);
//     const fileInputRef = useRef(null)
//     const selectFiles = () =>{
//         fileInputRef.current.click()
//     }

//     const onFileSelect = (event) =>{
//         console.log("soy images", images);
//         const files = event.target.files;

//         if(files.length === 0) return;
//         for (let i = 0; i < files.length; i++) {

//             if(files[i].type.split("/")[0] !== "image") continue;
//             if(!images.some (e => e.name === files[i].name)){
//                 setImages((prevImages)=> [
//                     ...prevImages,{
//                         name:files[i].name,
//                         url:URL.createObjectURL(files[i])
//                     }
//                 ])
//             }

//         }

//     }

//     const deleteImage = (index) =>{

//     const newImages = [...images.filter((_,i)=> i !== index)]
//     setImages(newImages)

//     }

//     const onDragOver = (event) =>{
//     event.preventDefault();
//     setIsDragging(true);
//     event.dataTransfer.dropEffect = "copy"
//     }
//     const onDragLeave = (event) =>{
//         event.preventDefault();
//         setIsDragging(false)
//     }

//     const onDrop =(event)=>{
//     event.preventDefault();
//     setIsDragging(false)
//     const files = event.dataTransfer.files;

//         if(files.length === 0) return;
//         for (let i = 0; i < files.length; i++) {

//             if(files[i].type.split("/")[0] !== "image") continue;
//             if(!images.some (e => e.name === files[i].name)){
//                 setImages((prevImages)=> [
//                     ...prevImages,{
//                         name:files[i].name,
//                         url:URL.createObjectURL(files[i])
//                     }
//                 ])
//             }

//         }
//     }

//     return <div
//     style={{ right: slide.files }}
//     className="bg-green-500 w-full h-full flex  transition-all duration-300 absolute top-0">
//        <div className="flex flex-col w-full items-center justify-center">
//       <Label
//         onDragOver={onDragOver}
//         onDragLeave={onDragLeave}
//         onDrop={onDrop}
//         htmlFor="dropzone-file"
//         className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"

//       >
//         <div className="flex flex-col items-center justify-center pb-6 pt-5" >
//           <svg
//             className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 20 16"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
//             />
//           </svg>
//           <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
//             <span className="font-semibold">Click to upload</span> or drag and drop
//           </p>
//           <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
//         </div>

//         {isDragging ? (<span>drop images here</span>) : (
//             <>Drag Drop images here or
//             <span onClick={selectFiles} >browse</span>
//             </>
//         )}
// <input type="file"  ref={fileInputRef} multiple onChange={(e)=>onFileSelect(e)}  />

//       </Label>
//       {/* <FileInput id="dropzone-file" className="hidden" onChange={(e) => setFile(e.target.files[0])}/> */}

//       <div className="w-full h-48 flex gap-12 mt-4">
//         {images.map((images,index)=>
//             <div key={index} className="w-32 h-full hover:overflow-visible overflow-hidden flex flex-col justify-center items-center">

//                 <img src={images.url} alt={images.name} className="h-32 "/>

//                 <span onClick={()=> deleteImage(index)} className="text-sm text-clip">{images.name}</span>
//             </div>
//         )}
//       </div>
//       <Button color="blue" className="opacity-0 pointer-events-none">Continuar</Button>
//           <Button onClick={()=> setSlide({...slide,formContact:"100%",files:"0%"})} color="blue" className="absolute right-0 bottom-0">Continuar</Button>
//     </div>

//     </div>
// }
// export default Files;

import {
  SecondaryExist,
  SecondaryTextExist,
  UseBg,
  UseBgDarker,
  UsePrimary,
  UseSecondary,
} from "@/theme/theming";
import { CloudUpload } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export interface Image {
  name: string;
  url: string;
}

export interface Props {
  slide: {
    login: string;
    welcome: string;
    formData: string;
    wallet: string;
    formContact: string;
    files: string;
  };
  setSlide: React.Dispatch<
    React.SetStateAction<{
      login: string;
      welcome: string;
      formData: string;
      wallet: string;
      formContact: string;
      files: string;
    }>
  >;
}
const Files = ({ slide, setSlide }: Props) => {
  const [images, setImages] = useState<Image[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [rendering, setRendering] = useState({ background: "red" });

  const onFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("soy images", images);
    const files = event.target.files;
    if (files) {
      if (files.length === 0) return;
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.split("/")[0] !== "image") continue;
        if (!images.some((e) => e.name === files[i].name)) {
          setImages((prevImages) => [
            ...prevImages,
            {
              name: files[i].name,
              url: URL.createObjectURL(files[i]),
            },
          ]);
        }
      }
    }
  };

  const OpenInput = () => {
    const Input = document.querySelector(
      "[data-administration=input]"
    ) as HTMLInputElement;

    Input && Input.click();
  };

  const deleteImage = (index: number) => {
    const newImages = [...images.filter((_, i) => i !== index)];
    setImages(newImages);
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    //setIsDragging(true);
    if (event.dataTransfer) event.dataTransfer.dropEffect = "copy";
  };
  const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    //setIsDragging(false);
  };

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    if (event.dataTransfer) {
      const files = event.dataTransfer.files;

      if (files.length === 0) return;
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.split("/")[0] !== "image") continue;
        if (!images.some((e) => e.name === files[i].name)) {
          setImages((prevImages) => [
            ...prevImages,
            {
              name: files[i].name,
              url: URL.createObjectURL(files[i]),
            },
          ]);
        }
      }
    }
  };
  const DragEnter = (e: DragEvent) => {
    setIsDragging(true);
    e.preventDefault();
    //const id = (e.target as HTMLDivElement).id;
    const dragTarget = e.target as HTMLElement | null;
    if (dragTarget?.getAttribute("data-drag") !== "dragzone") {
      if (!e.dataTransfer) return;

      e.dataTransfer.effectAllowed = "none";
      e.dataTransfer.dropEffect = "none";
    }
  };

  window.addEventListener("dragenter", DragEnter);

  const DragOver = (e: DragEvent) => {
    console.log("dragin over");
    e.preventDefault();
    e.stopPropagation();
    const dragTarget = e.target as HTMLElement | null;

    if (dragTarget?.getAttribute("data-drag") !== "dragzone") {
      if (!e.dataTransfer) return;
    }
  };

  window.addEventListener("dragover", DragOver);

  const DragDrop = (e: DragEvent) => {
    e.preventDefault();
    console.log("droping1");

    //setIsDragging(false);
    const dragTarget = e.target as HTMLElement | null;

    if (dragTarget?.getAttribute("data-drag") !== "dragzone") {
      console.log("droping2");
      setIsDragging(false);
      if (!e.dataTransfer) return;
      e.dataTransfer.effectAllowed = "none";
      e.dataTransfer.dropEffect = "none";
    }
  };

  window.addEventListener("drop", DragDrop);

  const DragEnd = () => {
    console.log("drag end");
  };

  window.addEventListener("dragend", DragEnd);

  const MouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log("entrando red");

    const target = e.target as HTMLElement;
    console.log(target);
    target.style.background = SecondaryExist();
    //setRendering({ background: "blue" });
  };

  const MouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log("saliendo blue");

    const target = e.target as HTMLElement;
    console.log(target);
    target.style.background = "none";
    //setRendering({ background: "red" });
  };

  const style = {
    background: "blue",
    ":hover": {
      background: "red",
    },
  };

  //     className="bg-green-500 w-full h-full flex  transition-all duration-300 absolute top-0">
  return (
    <div
      style={{ background: UseBg(), right: slide.files }}
      className="  flex flex-col rounded-2xl absolute top-0 w-full transition-all duration-300"
    >
      <div style={{ background: SecondaryExist() }} className="rounded-2xl">
        <div
          style={{
            //backgroundColor: UseBgDarker(),
            backgroundColor: UsePrimary(),
          }}
          className="w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-2xl overflow-hidden  my-[5px] ml-[5px] flex flex-col "
        >
          <div
            style={{
              color: UsePrimary() === "#000000" ? "#ffffff" : "#000000",
              background: SecondaryExist(),
            }}
            className=" font-semibold  md:text-2xl text-base"
          >
            Files
          </div>
          <div
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            style={{ background: UseBgDarker() }}
            className="mx-auto  w-full h-full p-4 "
          >
            <div
              data-drag="dragzone"
              onClick={OpenInput}
              className="w-full h-full   py-4 rounded cursor-pointer active-animation flex items-center justify-center duration-500"
              style={{
                backgroundColor: UseBg(),
                backgroundImage: `${
                  isDragging
                    ? `linear-gradient(90deg,${SecondaryTextExist()} 50% , transparent 50%), linear-gradient(90deg, ${SecondaryTextExist()} 50%, transparent 50%), linear-gradient(0deg, ${SecondaryTextExist()} 50%, transparent 50%), linear-gradient(0deg, ${SecondaryTextExist()} 50%, transparent 50%)`
                    : ""
                }
                `,
              }}
            >
              <div>
                <CloudUpload
                  style={{
                    color: UsePrimary(),
                  }}
                  data-drag="dragzone"
                  className="mx-auto h-32 w-32 "
                />
                {isDragging ? (
                  <div
                    data-drag="dragzone"
                    className=" text-center mx-auto gradient-text font-semibold"
                    style={{
                      backgroundImage: SecondaryExist(),
                    }}
                  >
                    drop here
                  </div>
                ) : (
                  <div
                    data-drag="dragzone"
                    className=" text-center mx-auto gradient-text font-semibold text-[clamp(1.5rem,3cqw,2rem)]"
                    style={{
                      backgroundImage: SecondaryExist(),
                    }}
                  >
                    click to upload
                  </div>
                )}

                <p
                  data-drag="dragzone"
                  className="text-xs  mx-auto w-fit"
                  style={{ color: UsePrimary() }}
                >
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
                <input
                  onDragEnd={() => console.log("dragend2")}
                  data-drag="dragzone"
                  type="file"
                  className="hidden"
                  data-administration="input"
                  multiple
                  onChange={(e) => onFileSelect(e)}
                  id="testinput"
                />
              </div>
            </div>
          </div>
          {images.length !== 0 && (
            <div
              style={{ background: UseBgDarker() }}
              className={`pt-4 w-full grid grid-cols-[repeat(auto-fill,minmax(125px,1fr))] auto-rows-[minmax(125px,1fr)] gap-4 duration-500 ease-in-out px-4  ${
                images.length ? "h-auto pb-4" : "h-0 pb-0"
              }`}
            >
              {images.map((images, index) => (
                <div
                  onMouseEnter={(e) => MouseEnter(e)}
                  onMouseLeave={(e) => MouseLeave(e)}
                  onClick={() => deleteImage(index)}
                  key={index}
                  className={`rounded-xl cursor-pointer hover:scale-105 duration-150 ease-in-out  grid place-items-center`}
                >
                  <div
                    style={{
                      //backgroundColor: UseBgDarker(),
                      backgroundColor: UseBgDarker(),
                    }}
                    className="w-[calc(100%-7px)] h-[calc(100%-7px)] rounded-xl overflow-hidden  pointer-events-none   "
                  >
                    <img
                      src={images.url}
                      alt={images.name}
                      className="h-full w-full rounded pointer-events-none "
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button
          style={{
            background: SecondaryTextExist(),
            color: UsePrimary() === "#000000" ? "#ffffff" : "#000000",
          }}
          className="font-medium px-4 rounded-lg w-fit text-[clamp(1rem,3cqw,1.5rem)] mt-2"
        >
          Accept
        </button>
      </div>
    </div>
  );
};
export default Files;
