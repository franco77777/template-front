import { type Dispatch, type SetStateAction, useEffect, useState } from "react";

import "react-quill/dist/quill.snow.css";
let ReactQuill: any;

export const Editor = () => {
  const [show, setShow] = useState(false);

  const importReactQuill = (
    setShow: Dispatch<SetStateAction<boolean>>
  ): void => {
    void import("react-quill").then((module) => {
      ReactQuill = module.default;
      setShow(true);
    });
  };

  useEffect(() => {
    importReactQuill(setShow);
  }, []);

  const myColors = [
    "purple",
    "#785412",
    "#452632",
    "#856325",
    "#963254",
    "#254563",
    "white",
  ];
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: myColors }],
      [{ background: myColors }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
  ];

  const [code, setCode] = useState("");
  const handleProcedureContentChange = (content: string): void => {
    setCode(content);
  };
  return (
    <div className="my-20 text-white">
      {show ? (
        <div className="mx-auto max-h-48 w-[70%] overflow-y-scroll">
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            value={code}
            onChange={handleProcedureContentChange}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
