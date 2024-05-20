const SidebarElementor = () => {
  return (
    <div className="w-1/3 grow bg-purple-500">
      <div className="bg-purple-600 text-white" id="text" draggable={true}>
        Text
      </div>
      <div className="bg-purple-600 text-white" id="imageButton">
        Image
      </div>
      <input type="file" multiple className="hidden" id="inputImage" />
      <div onClick={() => console.log("soy inputtext")}>BUTTON</div>
    </div>
  );
};
export default SidebarElementor;
