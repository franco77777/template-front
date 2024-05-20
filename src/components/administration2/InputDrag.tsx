import { useState } from "react";

const Administration2InputDrag = () => {
  const [images, setImages] = useState([]);

  const onFileSelect = (event) => {
    console.log("soy images", images);
    const files = event.target.files;

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
  return (
    <div className="bg-tertiary border-secondary border-[5px] flex flex-col rounded ">
      <div className="bg-secondary text-black font-semibold  md:text-2xl text-base">
        Files
      </div>
      <div className="mx-auto bg-tertiary w-full h-full p-4 ">
        <div
          onClick={OpenInput}
          className="w-full h-full bg-primary py-4 rounded cursor-pointer "
        >
          <svg
            className=" h-20 w-20 mx-auto text-secondary"
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
          <div className="text-secondary text-center mx-auto">
            click to upload
          </div>
          <p className="text-xs text-secondary mx-auto w-fit">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
          <input
            type="file"
            className="hidden"
            data-administration="input"
            multiple
            onChange={(e) => onFileSelect(e)}
          />
        </div>
      </div>

      <div
        className={`w-full grid grid-cols-[repeat(auto-fill,minmax(125px,1fr))] auto-rows-[minmax(125px,160px)] gap-4 duration-500 ease-in-out px-4  ${
          images.length ? "h-auto pb-4" : "h-0 pb-0"
        }`}
      >
        {images.length !== 0 &&
          images.map((images, index) => (
            <div
              onClick={() => deleteImage(index)}
              key={index}
              className=" hover:overflow-visible overflow-hidden flex flex-col justify-center items-center rounded cursor-pointer hover:scale-105 duration-150 ease-in-out  border-primary hover:border-secondary border-4"
            >
              <img
                src={images.url}
                alt={images.name}
                className="h-full w-full rounded "
              />

              <span
                //onClick={() => deleteImage(index)}
                className="text-sm text-clip"
              ></span>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Administration2InputDrag;
