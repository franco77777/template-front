import { storeAdministration6 } from "@/stores/administration/administration6Store";
import { Folder, SquarePlus, UserRound } from "lucide-react";

const Administration7 = () => {
  const URL = storeAdministration6((state) => state.url);
  return (
    <div className="min-h-screen p-[4vw] bg-primary text-secondary font-normal">
      <div className="text-[clamp(1rem,3cqw,2rem)]">Structure</div>
      <div className="text-xl"> {URL}</div>
      <div className="flex flex-col sm:flex-row gap-2 md:gap-8 justify-around mt-8 items-center">
        <button className=" border-2 border-secondary rounded flex  gap-1 md:gap-4 text-base items-center px-4 py-2">
          <Folder data-icon="folder" color="#00CCB4" className="" />
          <div>new folder 1</div>
        </button>
        <button className="border-2 border-secondary rounded   flex gap-1 md:gap-4 text-base items-center px-4 py-2">
          <Folder data-icon="folder" color="#00CCB4" className="" />
          <div>new folder 1</div>
        </button>
        <button className="border-2 border-secondary rounded   flex gap-1 md:gap-4 text-base items-center px-4 py-2">
          <Folder data-icon="folder" color="#00CCB4" className="" />
          <div>new folder 1</div>
        </button>
      </div>
      <div className="mt-4 md:mt-8 w-full text-center text-base md:text-2xl">
        assign / revoke assignment
      </div>
      <section className="text-xl border-2 border-secondary rounded mt-2 md:mt-8">
        <div className="flex gap-4 items-center bg-secondary text-black px-2">
          <div>Branch</div>
          <SquarePlus
            size={24}
            strokeWidth={2}
            className="cursor-pointer hover:scale-105 duration-150 "
          />
        </div>
        <div className="px-2 py-4 flex gap-8">
          <div className="flex gap-4 border-2 rounded border-secondary w-fit px-4 py-1">
            <UserRound
              size={24}
              strokeWidth={2}
              className="cursor-pointer hover:scale-105 duration-150 "
            />
            <div>branch 1</div>
          </div>
          <div className="flex gap-4 border-2 rounded border-secondary w-fit px-4 py-1">
            <UserRound
              size={24}
              strokeWidth={2}
              className="cursor-pointer hover:scale-105 duration-150 "
            />
            <div>branch 1</div>
          </div>
        </div>
      </section>
      <div className="w-[300px] h-[200px] bg-tertiary rounded animation">
        <div>Branch</div>
      </div>
    </div>
  );
};
export default Administration7;
