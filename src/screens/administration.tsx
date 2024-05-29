import { storeAdministration } from "@/stores/administration/administrationStore";
import { useNavigate } from "react-router-dom";
import {
  SecondaryExist,
  UseBg,
  UseBgDarker,
  UsePrimary,
  UseSecondary,
} from "@/theme/theming";
import ModalTheming from "@/components/administration/modalTheming";
import { storeTheme } from "@/stores/theme/theme";

import { useState } from "react";
import { CircleUserRound } from "lucide-react";

const Administration = () => {
  const SetAdministrationName = storeAdministration((state) => state.setName);
  const Theme = storeTheme((state) => state.primary);
  const Theme2 = storeTheme((state) => state);

  const [handleModal, setHandleModal] = useState(false);
  const navigate = useNavigate();
  const handleAdministration2 = (value: string) => {
    SetAdministrationName(value);
    if (value === "Organizations") {
      navigate("/administration-3");
      return;
    }

    navigate("/administration-2");
  };
  const HandleProfile = () => {
    navigate("/user-profile");
  };

  return (
    <div
      style={{
        backgroundColor: UseBg(),
      }}
      className={`font-normal w-full px-[4vw] py-[4vw]  min-h-screen relative`}
    >
      {handleModal ? <ModalTheming /> : ""}

      <div
        style={{
          color: UsePrimary(),
          backgroundColor: UseBgDarker(),
        }}
        className=" w-full h-12 md:h-14 xl:h-16  rounded-2xl bg  flex items-center justify-between px-[2vw] "
      >
        <div
          onClick={() => setHandleModal(!handleModal)}
          className=" font-semibold gradient-text text-[clamp(2rem,3cqw,5rem)]"
          style={{
            backgroundImage: SecondaryExist(),
          }}
        >
          User Name
        </div>
        <div
          onClick={() => HandleProfile()}
          className="cursor-pointer hover:scale-105 duration-100"
        >
          <CircleUserRound size={40} strokeWidth={2} />
        </div>
      </div>
      <div
        style={{
          color: UsePrimary(),
          backgroundColor: UseBgDarker(),
        }}
        className="  w-full h-14 md:h-16 xl:h-20  flex  items-center mt-[2vw] rounded-2xl px-[2vw] relative "
      >
        <div
          style={{
            backgroundImage: SecondaryExist(),
          }}
          className="text-[clamp(2rem,3cqw,6rem)] absolute top-[50%] left-[2vw] translate-y-[-50%] gradient-text font-bold"
        >
          Gravitad
        </div>
        <input
          style={{
            color: UsePrimary(),
            backgroundColor: UseBg(),
            borderColor: UsePrimary(),
          }}
          type="text"
          className="rounded-2xl h-[60%] ml-auto md:mx-auto text-[clamp(1rem,3cqw,2rem)]"
        />
      </div>
      <section className="grid gap-[1vw] grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] 2xl:grid-cols-3 mt-[2vw]">
        <div
          style={{
            //backgroundColor: UseBgDarker(),
            background: SecondaryExist(),
          }}
          onClick={() => handleAdministration2("Organizations")}
          className="    rounded-2xl     "
        >
          <div
            style={{
              //backgroundColor: UseBgDarker(),
              backgroundColor: UseBgDarker(),
            }}
            className="w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-2xl  my-[5px] ml-[5px] "
          >
            <div
              style={{
                backgroundColor: UsePrimary(),
                backgroundImage: SecondaryExist(),
                color: UsePrimary() === "#000000" ? "#ffffff" : "#000000",
              }}
              className="text-2xl font-semibold "
            >
              Organizations
            </div>
            <ul className="grid gap-3 grid-cols-3 grid-rows-2 p-3">
              <li
                style={{
                  color: UsePrimary(),
                  backgroundColor: UseBg(),
                }}
                className="   rounded"
              >
                1
              </li>
              <li
                style={{
                  borderColor: UsePrimary(),
                  color: UsePrimary(),
                  backgroundColor: UseBg(),
                }}
                className="  "
              >
                2
              </li>
              <li
                style={{
                  borderColor: UsePrimary(),
                  color: UsePrimary(),
                  backgroundColor: UseBg(),
                }}
                className="   rounded"
              >
                3
              </li>
              <li
                style={{
                  borderColor: UsePrimary(),
                  color: UsePrimary(),
                  backgroundColor: UseBg(),
                }}
                className="  "
              >
                4
              </li>
              <li
                style={{
                  borderColor: UsePrimary(),
                  color: UsePrimary(),
                  backgroundColor: UseBg(),
                }}
                className="   rounded"
              >
                5
              </li>
              <li
                style={{
                  borderColor: UsePrimary(),
                  color: UsePrimary(),
                  backgroundColor: UseBg(),
                }}
                className="   rounded"
              >
                6
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            background: SecondaryExist(),
          }}
          onClick={() => handleAdministration2("Structure")}
          className="   rounded-2xl "
        >
          <div
            style={{
              //backgroundColor: UseBgDarker(),
              backgroundColor: UseBgDarker(),
            }}
            className="w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-2xl overflow-hidden  my-[5px] ml-[5px] flex flex-col "
          >
            <div
              style={{
                color: UsePrimary() === "#000000" ? "#ffffff" : "#000000",
                background: SecondaryExist(),
              }}
              className=" text-2xl font-semibold "
            >
              Structure
            </div>
            <div
              style={{
                backgroundColor: UseBg(),
              }}
              className="  flex items-center justify-center h-full m-3 rounded"
            >
              <div className={` ${Theme ? `text-[${UsePrimary()}]` : ""}`}>
                IMAGE FILE
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            background: SecondaryExist(),
          }}
          onClick={() => handleAdministration2("Structure")}
          className="   rounded-2xl "
        >
          <div
            style={{
              //backgroundColor: UseBgDarker(),
              backgroundColor: UseBgDarker(),
            }}
            className="w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-2xl overflow-hidden  my-[5px] ml-[5px] flex flex-col "
          >
            <div
              style={{
                color: UsePrimary() === "#000000" ? "#ffffff" : "#000000",
                background: SecondaryExist(),
              }}
              className=" text-2xl font-semibold "
            >
              Documents
            </div>
            <div
              style={{
                backgroundColor: UseBg(),
              }}
              className="  flex items-center justify-center h-full m-3 rounded"
            >
              <div className={` ${Theme ? `text-[${UsePrimary()}]` : ""}`}>
                IMAGE FILE
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            //backgroundColor: UseBgDarker(),
            background: SecondaryExist(),
          }}
          onClick={() => handleAdministration2("Organizations")}
          className="    rounded-2xl     "
        >
          <div
            style={{
              //backgroundColor: UseBgDarker(),
              backgroundColor: UseBgDarker(),
            }}
            className="w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-2xl  my-[5px] ml-[5px] "
          >
            <div
              style={{
                backgroundColor: UsePrimary(),
                backgroundImage: SecondaryExist(),
                color: UsePrimary() === "#000000" ? "#ffffff" : "#000000",
              }}
              className="text-2xl font-semibold "
            >
              Api Tools
            </div>
            <ul className="grid gap-3 grid-cols-3 grid-rows-2 p-3">
              <li
                style={{
                  color: UsePrimary(),
                  backgroundColor: UseBg(),
                }}
                className="   rounded"
              >
                1
              </li>
              <li
                style={{
                  borderColor: UsePrimary(),
                  color: UsePrimary(),
                  backgroundColor: UseBg(),
                }}
                className="  "
              >
                2
              </li>
              <li
                style={{
                  borderColor: UsePrimary(),
                  color: UsePrimary(),
                  backgroundColor: UseBg(),
                }}
                className="   rounded"
              >
                3
              </li>
              <li
                style={{
                  borderColor: UsePrimary(),
                  color: UsePrimary(),
                  backgroundColor: UseBg(),
                }}
                className="  "
              >
                4
              </li>
              <li
                style={{
                  borderColor: UsePrimary(),
                  color: UsePrimary(),
                  backgroundColor: UseBg(),
                }}
                className="   rounded"
              >
                5
              </li>
              <li
                style={{
                  borderColor: UsePrimary(),
                  color: UsePrimary(),
                  backgroundColor: UseBg(),
                }}
                className="   rounded"
              >
                6
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            //backgroundColor: UseBgDarker(),
            background: SecondaryExist(),
          }}
          onClick={() => handleAdministration2("Organizations")}
          className="    rounded-2xl     "
        >
          <div
            style={{
              //backgroundColor: UseBgDarker(),
              backgroundColor: UseBgDarker(),
            }}
            className="w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-2xl  my-[5px] ml-[5px] "
          >
            <div
              style={{
                backgroundColor: UsePrimary(),
                backgroundImage: SecondaryExist(),
                color: UsePrimary() === "#000000" ? "#ffffff" : "#000000",
              }}
              className="text-2xl font-semibold "
            >
              Staff
            </div>
            <ul className="grid gap-3 grid-cols-3 grid-rows-2 p-3">
              <li
                style={{
                  color: UsePrimary(),
                  backgroundColor: UseBg(),
                }}
                className="   rounded"
              >
                1
              </li>
              <li
                style={{
                  borderColor: UsePrimary(),
                  color: UsePrimary(),
                  backgroundColor: UseBg(),
                }}
                className="  "
              >
                2
              </li>
              <li
                style={{
                  borderColor: UsePrimary(),
                  color: UsePrimary(),
                  backgroundColor: UseBg(),
                }}
                className="   rounded"
              >
                3
              </li>
              <li
                style={{
                  borderColor: UsePrimary(),
                  color: UsePrimary(),
                  backgroundColor: UseBg(),
                }}
                className="  "
              >
                4
              </li>
              <li
                style={{
                  borderColor: UsePrimary(),
                  color: UsePrimary(),
                  backgroundColor: UseBg(),
                }}
                className="   rounded"
              >
                5
              </li>
              <li
                style={{
                  borderColor: UsePrimary(),
                  color: UsePrimary(),
                  backgroundColor: UseBg(),
                }}
                className="   rounded"
              >
                6
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            //backgroundColor: UseBgDarker(),
            background: SecondaryExist(),
          }}
          onClick={() => handleAdministration2("Organizations")}
          className="    rounded-2xl     "
        >
          <div
            style={{
              //backgroundColor: UseBgDarker(),
              backgroundColor: UseBgDarker(),
            }}
            className="w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-2xl  my-[5px] ml-[5px] "
          >
            <div
              style={{
                backgroundColor: UsePrimary(),
                backgroundImage: SecondaryExist(),
                color: UsePrimary() === "#000000" ? "#ffffff" : "#000000",
              }}
              className="text-2xl font-semibold "
            >
              Tools
            </div>
            <ul className="grid gap-3 grid-cols-3 grid-rows-2 p-3">
              <li
                style={{
                  color: UsePrimary(),
                  backgroundColor: UseBg(),
                }}
                className="   rounded"
              >
                1
              </li>
              <li
                style={{
                  borderColor: UsePrimary(),
                  color: UsePrimary(),
                  backgroundColor: UseBg(),
                }}
                className="  "
              >
                2
              </li>
              <li
                style={{
                  borderColor: UsePrimary(),
                  color: UsePrimary(),
                  backgroundColor: UseBg(),
                }}
                className="   rounded"
              >
                3
              </li>
              <li
                style={{
                  borderColor: UsePrimary(),
                  color: UsePrimary(),
                  backgroundColor: UseBg(),
                }}
                className="  "
              >
                4
              </li>
              <li
                style={{
                  borderColor: UsePrimary(),
                  color: UsePrimary(),
                  backgroundColor: UseBg(),
                }}
                className="   rounded"
              >
                5
              </li>
              <li
                style={{
                  borderColor: UsePrimary(),
                  color: UsePrimary(),
                  backgroundColor: UseBg(),
                }}
                className="   rounded"
              >
                6
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Administration;
