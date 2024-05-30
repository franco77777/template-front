import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import {
  UseBg,
  SecondaryTextExist,
  UseBgDarker,
  UsePrimary,
  SecondaryExist,
} from "@/theme/theming";
import { CirclePlus, CircleX } from "lucide-react";

const formContact = ({ slide, setSlide }) => {
  const [openModal, setOpenModal] = useState(false);
  const [socialList, setSocialList] = useState([]);
  const [social, setSocial] = useState({ name: "", link: "" });

  function onCloseModal() {
    setOpenModal(false);
  }

  const AddSocial = () => {
    socialList.push(social);
    console.log(social);
    console.log(socialList);
    setOpenModal(false);
  };

  const removeSocial = (e) => {
    const test = [...socialList];
    test.splice(e, 1);
    setSocialList(test);
  };
  return (
    <div
      style={{ right: slide.formContact, color: SecondaryTextExist() }}
      className=" w-full h-full flex  transition-all duration-300 absolute top-0 font-normal text-[clamp(1rem,3cqw,1.5rem)]"
    >
      {openModal && (
        <div
          style={{ background: UseBg() }}
          className="w-screen min-h-screen absolute top-0 left-0 z-10 opacity-80"
        ></div>
      )}
      <form
        style={{ background: UseBgDarker() }}
        className="rounded-2xl p-4 flex max-w-md flex-col gap-4 absolute w-[80%]  top-[50%] left-[50%] center-translate"
      >
        <div>
          <div>linkedin</div>
          <input
            type="text"
            style={{ background: UseBgDarker(), borderColor: UsePrimary() }}
            className="border-2 rounded-xl w-full"
          />
        </div>

        <div>
          <div>discord</div>
          <input
            type="text"
            style={{ background: UseBgDarker(), borderColor: UsePrimary() }}
            className="border-2 rounded-xl w-full"
          />
        </div>
        <div>
          <div>telegram</div>
          <input
            type="text"
            style={{ background: UseBgDarker(), borderColor: UsePrimary() }}
            className="border-2 rounded-xl w-full"
          />
        </div>
        <div>
          <div>github</div>
          <input
            type="text"
            style={{ background: UseBgDarker(), borderColor: UsePrimary() }}
            className="border-2 rounded-xl w-full"
          />
        </div>
        <div>
          {socialList.map((e, i) => (
            <div key={i} className=" flex gap-4 text-sm ">
              <span>{e.name}</span>
              <span>{e.link}</span>
              <button onClick={() => removeSocial(i)}>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  class="h-5 w-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
        <button
          style={{
            background: SecondaryExist(),
            color: UsePrimary() === "#000000" ? "#ffffff" : "#000000",
          }}
          type="button"
          onClick={() => setOpenModal(true)}
          color="success"
          className="p-2 rounded-xl  "
        >
          <div className="flex gap-2 cursor-pointer items-center justify-center">
            <CirclePlus width={30} height={30} />

            <span className="font-medium text-base">add social network</span>
          </div>
        </button>

        <button
          style={{
            background: SecondaryExist(),
            color: UsePrimary() === "#000000" ? "#ffffff" : "#000000",
          }}
          className="cursor-pointer px-4 rounded-lg w-fit opacity-0 pointer-events-none"
        >
          Continuar
        </button>
        {/* <Button
          onClick={() =>
            setSlide({ ...slide, formContact: "100%", files: "0%" })
          }
          color="blue"
          className="absolute right-0 bottom-0"
        >
          Continuar
        </Button> */}
        <button
          type="button"
          onClick={() =>
            setSlide({ ...slide, formContact: "100%", files: "0%" })
          }
          style={{
            background: SecondaryExist(),
            color: UsePrimary() === "#000000" ? "#ffffff" : "#000000",
          }}
          className="cursor-pointer px-4 rounded-lg w-fit absolute right-2 bottom-2"
        >
          Continuar
        </button>
      </form>
      {openModal && (
        <div
          style={{
            background: UseBgDarker(),
            color: SecondaryTextExist(),
          }}
          className="modalAnimation flex flex-col gap-4 z-30 w-96 p-4 rounded-xl   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <CircleX
            onClick={() => setOpenModal(false)}
            className="top-2 right-2 absolute cursor-pointer"
            size={30}
          />
          <div>
            <div>social network</div>
            <input
              type="text"
              style={{
                background: UseBg(),
                color: SecondaryTextExist(),
                borderColor: UsePrimary(),
              }}
              className="rounded-xl w-full border-2"
              value={social.name}
              onChange={(event) =>
                setSocial({ ...social, name: event.target.value })
              }
            />
          </div>
          <div>
            <div>link</div>
            <input
              type="text"
              style={{
                borderColor: UsePrimary(),
                background: UseBg(),
                color: SecondaryTextExist(),
              }}
              onChange={(event) =>
                setSocial({ ...social, link: event.target.value })
              }
              className="rounded-xl w-full"
            />
          </div>
          <button
            onClick={AddSocial}
            style={{
              background: SecondaryExist(),
              color: UsePrimary() === "#000000" ? "#ffffff" : "#000000",
            }}
            className="px-4 rounded-lg mt-4"
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
};

export default formContact;
