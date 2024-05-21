import { storeTheme } from "@/stores/theme/theme";
import { Theming } from "@/theme/theming";

const ModalTheming = () => {
  const SetTheme = storeTheme((state) => state.setTheme);
  console.log("changing theme");

  return (
    <div className="w-[min(500px,100%)] h-[min(400px,100%)] bg-black rounded absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10">
      <ul className="grid grid-cols-3 grid-rows-2 gap-2 p-2">
        <li
          onClick={() => SetTheme(1)}
          style={{ backgroundColor: Theming[1].primary }}
          className=" w-full h-32"
        ></li>
        <li
          onClick={() => SetTheme(2)}
          style={{ backgroundColor: Theming[2].primary }}
          className=" w-full h-32"
        ></li>
        <li
          onClick={() => SetTheme(3)}
          style={{ backgroundColor: Theming[3].primary }}
          className=" w-full h-32"
        ></li>
        <li
          onClick={() => SetTheme(4)}
          style={{ backgroundColor: Theming[4].primary }}
          className=" w-full h-32"
        ></li>
        <li
          onClick={() => SetTheme(5)}
          style={{ backgroundColor: Theming[5].bg }}
          className=" w-full h-32"
        ></li>
        <li
          onClick={() => SetTheme(6)}
          style={{ backgroundColor: Theming[6].primary }}
          className=" w-full h-32"
        ></li>
      </ul>
    </div>
  );
};
export default ModalTheming;
