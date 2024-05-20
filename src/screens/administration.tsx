import { storeAdministration } from "@/stores/administration/administrationStore";
import { useNavigate } from "react-router-dom";

const Administration = () => {
  const SetAdministrationName = storeAdministration((state) => state.setName);
  const navigate = useNavigate();
  const handleAdministration2 = (value: string) => {
    SetAdministrationName(value);
    navigate("/administration2");
  };
  return (
    <div className="font-normal   w-full px-[4vw] py-[4vw] bg-primary min-h-screen">
      <div className="text-secondary w-full h-12 md:h-14 xl:h-16 bg-tertiary rounded bg  flex items-center justify-between px-[2vw]">
        <div>user name </div>
        <div>user image</div>
      </div>
      <div className=" text-secondary w-full h-14 md:h-16 xl:h-20 bg-tertiary flex items-center mt-[2vw] rounded px-[2vw] relative">
        <div className="absolute top-[50%] left-[2vw] translate-y-[-50%] ">
          Gravitad
        </div>
        <input
          type="text"
          className="rounded h-[60%] mx-auto bg-primary border-secondary"
        />
      </div>
      <section className="grid gap-[1vw] grid-cols-[repeat(auto-fit,minmax(400px,1fr))] 2xl:grid-cols-3 mt-[2vw]">
        <div
          onClick={() => handleAdministration2("Organizations")}
          className="bg-tertiary border-secondary border-[5px] flex flex-col rounded"
        >
          <div className="bg-secondary text-2xl font-semibold text-black">
            Organizations
          </div>
          <ul className="grid gap-2 grid-cols-3 grid-rows-2 p-2">
            <li className=" bg-primary text-secondary">1</li>
            <li className=" bg-primary text-secondary">2</li>
            <li className=" bg-primary text-secondary">3</li>
            <li className=" bg-primary text-secondary">4</li>
            <li className=" bg-primary text-secondary">5</li>
            <li className=" bg-primary text-secondary">6</li>
          </ul>
        </div>
        <div
          onClick={() => handleAdministration2("Structure")}
          className="bg-tertiary border-secondary border-[5px] rounded flex flex-col  "
        >
          <div className="bg-secondary text-2xl font-semibold text-black">
            Structure
          </div>
          <div className="bg-primary  flex items-center justify-center h-full m-2">
            <div className=" text-secondary">IMAGE FILE</div>
          </div>
        </div>
        <div
          onClick={() => handleAdministration2("Documents")}
          className="bg-tertiary border-secondary border-[5px] rounded flex flex-col "
        >
          <div className="bg-secondary text-2xl font-semibold text-black">
            Documents
          </div>
          <div className="  h-full bg-primary flex items-center justify-center m-2">
            <div className=" text-secondary  text-center gridTest">
              IMAGE FILE
            </div>
          </div>
        </div>
        <div
          onClick={() => handleAdministration2("Api Tools")}
          className="bg-tertiary border-secondary border-[5px] rounded flex flex-col "
        >
          <div className="bg-secondary text-2xl font-semibold text-black">
            Api Tools
          </div>
          <ul className="grid gap-2 grid-cols-3 grid-rows-2 p-2">
            <li className=" bg-primary text-secondary">1</li>
            <li className=" bg-primary text-secondary">2</li>
            <li className=" bg-primary text-secondary">3</li>
            <li className=" bg-primary text-secondary">4</li>
            <li className=" bg-primary text-secondary">5</li>
            <li className=" bg-primary text-secondary">6</li>
          </ul>
        </div>
        <div
          onClick={() => handleAdministration2("Staff")}
          className="bg-tertiary border-secondary border-[5px] rounded  flex flex-col "
        >
          <div className="bg-secondary text-2xl font-semibold text-black">
            Staff
          </div>
          <ul className="grid gap-2 grid-cols-3 grid-rows-2 p-2">
            <li className=" bg-primary text-secondary">1</li>
            <li className=" bg-primary text-secondary">2</li>
            <li className=" bg-primary text-secondary">3</li>
            <li className=" bg-primary text-secondary">4</li>
            <li className=" bg-primary text-secondary">5</li>
            <li className=" bg-primary text-secondary">6</li>
          </ul>
        </div>
        <div
          onClick={() => handleAdministration2("Tools")}
          className="bg-tertiary border-secondary border-[5px] rounded  flex flex-col "
        >
          <div className="bg-secondary text-2xl font-semibold text-black">
            Tools
          </div>
          <ul className="grid gap-2 grid-cols-3 grid-rows-2 p-2">
            <li className=" bg-primary text-secondary">1</li>
            <li className=" bg-primary text-secondary">2</li>
            <li className=" bg-primary text-secondary">3</li>
            <li className=" bg-primary text-secondary">4</li>
            <li className=" bg-primary text-secondary">5</li>
            <li className=" bg-primary text-secondary">6</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default Administration;
