import { storeTheme } from "@/stores/theme/theme";
import { GradientTheme, Theming, ThemingType } from "@/theme/theming";

const ModalTheming = () => {
  const SetPrimary = storeTheme((state) => state.setPrimary);
  const SetBg = storeTheme((state) => state.setBg);
  const SetBgDarker = storeTheme((state) => state.setBgDarker);
  const SetSecondary = storeTheme((state) => state.setSecondary);
  console.log("changing theme");
  const SetTheme = (value: number) => {
    SetPrimary(Theming[value as keyof ThemingType].primary);
    SetBg(Theming[value as keyof ThemingType].bg);
    SetBgDarker(Theming[value as keyof ThemingType].bgDarker);
    if (value < 7) {
      SetSecondary("");
    }
    if (value === 7) {
      SetSecondary(Theming[7].secondary);
    }
    if (value === 8) {
      SetSecondary(Theming[8].secondary);
    }
  };

  return (
    <div className="w-[min(500px,100%)]  bg-black rounded absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10">
      <ul className="grid grid-cols-3 grid-rows-2 gap-2 p-2">
        <li
          onClick={() => SetTheme(0)}
          style={{ backgroundColor: Theming[0].primary }}
          className=" w-full h-32"
        ></li>
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

        <li
          onClick={() => SetTheme(7)}
          style={{
            backgroundImage: `linear-gradient(to left, ${Theming[7].primary},${Theming[7].secondary})`,
          }}
          className={`w-full h-32 bg-gradient-to-r from-cyan-500 to-blue-500`}
        ></li>
        <li
          onClick={() => SetTheme(8)}
          style={{
            backgroundImage: `linear-gradient(to left, ${Theming[8].primary},${Theming[8].secondary})`,
          }}
          className={`w-full h-32 bg-gradient-to-r from-cyan-500 to-blue-500`}
        ></li>
      </ul>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full p-2 pt-0">
        <input
          type="text"
          className="bg-primary boder-2 border-white text-white rounded w-full"
        />
        <input
          type="text"
          className="bg-primary boder-2 border-white text-white rounded w-full"
        />
        <input
          type="text"
          className="bg-primary boder-2 border-white text-white rounded "
        />
        <input
          type="text"
          className="bg-primary boder-2 border-white text-white rounded "
        />
      </div>
    </div>
  );
};
export default ModalTheming;
