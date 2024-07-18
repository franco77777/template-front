import { Bg, BgDarker, Primary, SecondaryGradientExist } from "@/theme/theming";
import { tasks } from "@/types/globalAdminTypes";

export interface props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
  tasks: tasks[];
}
const Tasks = ({ setModal, modal, tasks }: props) => {
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="flex gap-2">
        <div
          style={{ background: BgDarker(), borderColor: Primary() }}
          className="rounded-2xl bg-purple-500 w-1/3 h-auto border-[1px] "
        >
          section1
        </div>
        <div className="  rounded-2xl  w-full flex flex-col gap-2 ">
          <div
            style={{ background: BgDarker(), borderColor: Primary() }}
            className="border-[1px]  h-24 rounded-2xl bg-yellow-500"
          >
            section3
          </div>
          <ul
            style={{ background: BgDarker(), borderColor: Primary() }}
            className="p-2 border-[1px] gap-2  w-full h-full rounded-xl grid grid-cols-[repeat(auto-fill,minmax(min(100%,100px),1fr))] auto-rows-[100px]"
          >
            <li
              style={{ background: Bg(), borderColor: Primary() }}
              className="grid place-items-center rounded-xl border-[1px]"
            >
              example
            </li>
            <li
              style={{ background: Bg(), borderColor: Primary() }}
              className="grid place-items-center rounded-xl border-[1px]"
            >
              example
            </li>
            <li
              style={{ background: Bg(), borderColor: Primary() }}
              className="grid place-items-center rounded-xl border-[1px]"
            >
              example{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className=" w-full rounded-2xl  ">
        <div
          style={{
            //backgroundColor: UseBgDarker(),
            background: SecondaryGradientExist(),
          }}
          className="rounded-2xl overflow-hidden"
        >
          <div className=" w-[calc(100%-6px)] h-[calc(100%-6px)] rounded-2xl  my-[3px] ml-[3px] ">
            <div
              style={{
                backgroundColor: Primary(),
                backgroundImage: SecondaryGradientExist(),
                color: Primary() === "#000000" ? "#ffffff" : "#000000",
              }}
              className="text-lg font-semibold text-center "
            >
              Tasks
            </div>
            <ul
              style={{ background: BgDarker() }}
              className=" rounded-xl p-2 grid grid-cols-[repeat(auto-fill,minmax(min(100%,100px),1fr))] auto-rows-[100px] gap-2"
            >
              {tasks?.map((e) => (
                <li
                  key={e.name}
                  style={{
                    backgroundColor: Bg(),
                    borderColor: Primary(),
                  }}
                  className="hover:scale-105 duration-150 cursor-pointer grid place-items-center rounded-xl w-full h-full border-[1px] p-2 break-words"
                >
                  {e.name}
                </li>
              ))}
              <li
                onClick={() => handleModal()}
                style={{
                  backgroundColor: Bg(),
                  borderColor: Primary(),
                }}
                className="hover:scale-105 duration-150 cursor-pointer flex justify-center items-center rounded-xl w-full h-full border-[1px] p-2 break-words"
              >
                + add
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tasks;
