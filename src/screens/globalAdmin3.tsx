import {
  Bg,
  BgDarker,
  Primary,
  SecondaryGradientExist,
  SecondaryTextExist,
} from "@/theme/theming";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { tasks } from "@/types/globalAdminTypes";

import { pageStore } from "@/stores/Screens/canvasStore";
import ModalCanvases from "@/components/canvas/components/modalCanvases";
import PageSection from "@/components/globalAdmin3/components/pageSection";

import ModalTask from "@/components/globalAdmin3/components/modalTask";
import Tasks from "@/components/globalAdmin3/components/tasks";

const GlobalAdmin3 = () => {
  const [modal, setModal] = useState(false);
  const [ModalCanvasName, setModalCanvasName] = useState(false);
  const [tasks, setTasks] = useState<tasks[]>([]);

  const canvases = pageStore((state) => state.page);

  console.log("canvases", canvases);

  return (
    <div
      style={{ background: Bg(), color: SecondaryTextExist() }}
      className="flex gap-2 flex-col lg:flex-row h-screen p-4 relative"
    >
      <section className="w-full  flex-grow flex flex-col gap-2 h-full">
        <Tasks tasks={tasks} setModal={setModal} modal={modal} />
      </section>
      <section
        style={{
          background: SecondaryGradientExist(),
        }}
        className=" w-full h-full flex flex-col gap-2  p-[2px] rounded-2xl "
      >
        <PageSection />
      </section>
      {ModalCanvasName && <ModalCanvases setModal={setModalCanvasName} />}
      {ModalCanvasName && (
        <div
          onClick={() => setModalCanvasName(false)}
          className="z-10 bg-black opacity-80 fixed min-h-screen min-w-full"
        />
      )}
      {modal && <ModalTask setModal={setModal} setTasks={setTasks} />}
      {modal && (
        <div
          onClick={() => setModal(false)}
          className="z-10 bg-black opacity-80 fixed min-h-screen min-w-full"
        />
      )}
    </div>
  );
};
export default GlobalAdmin3;
