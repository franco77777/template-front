import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { storeExcalidraw } from "../stores/Excalidraw/excalidrawStore";
import {
  SecondaryExist,
  SecondaryTextExist,
  UseBg,
  UseBgDarker,
  UsePrimary,
} from "@/theme/theming";
import { CirclePlus, CircleX, Settings, UsersRound } from "lucide-react";

const ExcalidrawFiles2 = () => {
  const [openModal, setOpenModal] = useState(false);

  const [newFile, setNewFile] = useState({ name: "" });
  const storeName = storeExcalidraw((state) => state.name);
  const setStoreName = storeExcalidraw((state) => state.setName);
  const navigate = useNavigate();

  const AddNewFile = () => {
    list.push(newFile);
    setOpenModal(false);

    console.log("soy new file", newFile);
  };

  const navigateToSection = (e) => {
    setStoreName(e.name);

    navigate("/excalidrawFiles2/section");
  };

  const [list, setList] = useState([
    { name: "Personal" },
    { name: "Projects" },
    { name: "Automations" },
    { name: "Deployments" },
    { name: "Access" },
    { name: "Access API" },
    { name: "Assignments" },
    { name: "Hardware" },
    { name: "Tasks" },
    { name: "Schedules" },
    { name: "Dazsync" },
  ]);

  function onCloseModal() {
    setOpenModal(false);
  }
  return (
    <div
      style={{ background: UseBg(), color: SecondaryTextExist() }}
      className="w-full min-h-[100vh] p-4 px-8 font-mono flex flex-col"
    >
      <header
        style={{
          color: UsePrimary(),
          backgroundColor: UseBgDarker(),
        }}
        className="  w-full gap-2    flex flex-wrap justify-center sm:justify-between items-center mt-[2vw] rounded-2xl p-2  "
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
          className="rounded-2xl h-10  text-[clamp(1rem,3cqw,1.5rem)]"
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
      </header>

      {/* <---------------------------------------BODY-------------------------------> */}
      <div className=" w-full grow mt-8 text-base  gap-8 grid grid-cols-2 auto-rows-[150px] sm:grid-cols-3 sm:auto-rows-[200px]">
        {list.map((e, i) => (
          <div
            style={{ background: UseBgDarker(), borderColor: UsePrimary() }}
            className="w-full h-full rounded-2xl border-2"
            onClick={() => navigateToSection(e)}
          >
            {e.name}
          </div>
        ))}
        <div
          onClick={() => setOpenModal(true)}
          style={{
            background: SecondaryExist(),
            color: UsePrimary() === "#000000" ? "#ffffff" : "#000000",
          }}
          className=" rounded-2xl overflow-hidden cursor-pointer flex gap-2 justify-center items-center"
        >
          {/* <img src="./icons/add.svg" alt="add" width={30} height={30} /> */}
          <CirclePlus width={30} height={30} />
          <span className="font-semibold text-3xl">Add</span>

          {/* <Modal
            show={openModal}
            size="md"
            onClose={onCloseModal}
            popup
            className="font-mono"
          >
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="title1" value="Title" />
                  </div>
                  <TextInput
                    id="title1"
                    onChange={(event) =>
                      setNewFile({ ...newFile, name: event.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="input1" value="input" />
                  </div>

                  <TextInput
                    id="input1"
                    type="text"
                    required
                    onChange={(event) =>
                      setNewFile({ ...newFile, input: event.target.value })
                    }
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="input2" value="input" />
                  </div>

                  <TextInput
                    id="input2"
                    type="text"
                    required
                    onChange={(event) =>
                      setNewFile({ ...newFile, input2: event.target.value })
                    }
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="input3" value="input" />
                  </div>

                  <TextInput
                    id="input3"
                    type="text"
                    required
                    onChange={(event) =>
                      setNewFile({ ...newFile, inpu3: event.target.value })
                    }
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="input4" value="input" />
                  </div>

                  <TextInput
                    id="input4"
                    type="text"
                    required
                    onChange={(event) =>
                      setNewFile({ ...newFile, input4: event.target.value })
                    }
                  />
                </div>

                <Button onClick={AddNewFile} color="success">
                  Add
                </Button>
              </div>
            </Modal.Body>
          </Modal> */}
        </div>
      </div>
      {/* <----------------------------------MODAL-----------------------------------> */}
      {openModal && (
        <div
          style={{ background: UseBg() }}
          className="w-full h-full  fixed top-0 left-0 z-10 opacity-80"
        ></div>
      )}
      {openModal && (
        <div
          style={{ background: UseBgDarker() }}
          className="  text-2xl modalAnimation w-96 rounded-2xl   fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
        >
          <div className="relative flex flex-col gap-4 p-8">
            <CircleX
              onClick={() => setOpenModal(false)}
              className="absolute top-2 right-2 cursor-pointer"
              size={30}
            />
            <div className="">
              <div>Title</div>
              <input
                onChange={(event) =>
                  setNewFile({ ...newFile, name: event.target.value })
                }
                style={{ borderColor: UsePrimary(), background: UseBg() }}
                type="text"
                className="border-2 rounded-xl w-full"
              />
            </div>
            <div className="">
              <div>Input</div>
              <input
                style={{ borderColor: UsePrimary(), background: UseBg() }}
                type="text"
                className="border-2 rounded-xl w-full"
              />
            </div>
            <div className="">
              <div>Input</div>
              <input
                style={{ borderColor: UsePrimary(), background: UseBg() }}
                type="text"
                className="border-2 rounded-xl w-full"
              />
            </div>
            <div className="">
              <div>Input</div>
              <input
                style={{ borderColor: UsePrimary(), background: UseBg() }}
                type="text"
                className="border-2 rounded-xl w-full"
              />
            </div>
            <div className="">
              <div>Input</div>
              <input
                style={{ borderColor: UsePrimary(), background: UseBg() }}
                type="text"
                className="border-2 rounded-xl w-full"
              />
            </div>
            <button
              onClick={AddNewFile}
              type="button"
              style={{
                background: SecondaryExist(),
                color: UsePrimary() === "#000000" ? "#ffffff" : "#000000",
              }}
              className="px-4 rounded-xl"
            >
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExcalidrawFiles2;
