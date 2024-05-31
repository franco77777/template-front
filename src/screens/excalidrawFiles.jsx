import FirstFiles from "@/components/excalidrawFiles/firstFiles";
import Process from "@/components/excalidrawFiles/process";
import {
  SecondaryExist,
  SecondaryTextExist,
  UseBg,
  UseBgDarker,
  UsePrimary,
} from "@/theme/theming";
import { CircleUserRound, Settings, UsersRound } from "lucide-react";

const ExcalidrawFiles = () => {
  return (
    <div
      style={{ background: UseBg(), color: SecondaryTextExist() }}
      className="w-full min-h-[100vh]  p-4 px-8 "
    >
      <div
        style={{
          color: UsePrimary(),
          backgroundColor: UseBgDarker(),
        }}
        className="  w-full h-14 md:h-16 xl:h-20  flex  justify-between items-center mt-[2vw] rounded-2xl px-[2vw]  "
      >
        <div
          style={{
            backgroundImage: SecondaryExist(),
          }}
          className="text-[clamp(1.8rem,3cqw,3rem)] gradient-text font-bold leading-normal "
        >
          Gravitad
        </div>
        <input
          style={{
            color: SecondaryTextExist(),
            backgroundColor: UseBg(),
            borderColor: UsePrimary(),
          }}
          type="text"
          className="rounded-2xl   text-[clamp(1rem,3cqw,1.5rem)]"
        />
        <div
          style={{ color: SecondaryTextExist() }}
          className="flex gap-2 items-center"
        >
          <UsersRound
            strokeWidth={2}
            className="w-[clamp(30px,3cqw,40px)] h-[clamp(30px,3cqw,40px)]"
          />
          <UsersRound
            strokeWidth={2}
            className="w-[clamp(30px,3cqw,40px)] h-[clamp(30px,3cqw,40px)]"
          />
          <Settings
            strokeWidth={2}
            className="w-[clamp(30px,3cqw,40px)] h-[clamp(30px,3cqw,40px)]"
          />
        </div>
      </div>

      <FirstFiles />
      <Process title={"Process"} />
      <Process title={"Corrections"} />
    </div>
  );
};

export default ExcalidrawFiles;
