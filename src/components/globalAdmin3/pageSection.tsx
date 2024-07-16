import { Bg, BgDarker, Primary, SecondaryGradientExist } from "@/theme/theming";

const PageSection = () => {
  const handleInputStart = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("enteringggggggggg");
    }
  };
  return (
    <section
      style={{
        background: SecondaryGradientExist(),
      }}
      className=" w-full rounded-2xl  h-full grid place-items-center p-[2px]"
    >
      <div
        style={{
          backgroundColor: BgDarker(),
        }}
        className="flex flex-col gap-2  rounded-2xl w-full h-full  "
      >
        <div className="m-2">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
              preserveAspectRatio="xMidYMid meet"
              className="w-5 h-5 cursor-pointer hover:scale-125 duration-150"
            >
              <path
                fill="currentColor"
                d="M8.6 3a.6.6 0 0 0-1.2 0v4.4H3a.6.6 0 0 0 0 1.2h4.4V13a.6.6 0 1 0 1.2 0V8.6H13a.6.6 0 1 0 0-1.2H8.6V3Z"
              ></path>
            </svg>
            <input
              onKeyDown={(e) => handleInputStart(e)}
              style={{
                borderColor: Primary(),
                backgroundColor: Bg(),
              }}
              type="text"
              className="w-full rounded-xl border-[2px]"
            />
          </div>
        </div>
        <ul
          style={{ background: BgDarker() }}
          className=" rounded-xl p-2 grid grid-cols-[repeat(auto-fill,minmax(min(100%,100px),1fr))] auto-rows-[100px] gap-2"
        >
          {/* {canvases.map((e) => (
            <li
              key={e.canvasName}
              onClick={() => handleCanvas(e.canvasName)}
              style={{
                backgroundColor: Bg(),
                borderColor: Primary(),
              }}
              className="hover:scale-105 duration-150 cursor-pointer grid place-items-center rounded-xl w-full h-full border-[1px] p-2 break-words"
            >
              {e.canvasName}
            </li>
          ))} */}
          {/* <li
            onClick={() => setModalCanvasName(true)}
            style={{
              backgroundColor: Bg(),
              borderColor: Primary(),
            }}
            className="hover:scale-105 duration-150 cursor-pointer flex justify-center items-center rounded-xl w-full h-full border-[1px] p-2 break-words"
          >
            + add
          </li> */}
        </ul>
        {/* {canvases.map((e) => (
          <img
            src={e.url}
            key={e.canvasName}
            style={{
              backgroundColor: BgDarker(),
              borderColor: Primary(),
            }}
            className="hover:scale-[1.01] duration-150 cursor-pointer rounded-xl w-full h-full"
          ></img>
        ))} */}
      </div>
    </section>
  );
};
export default PageSection;
