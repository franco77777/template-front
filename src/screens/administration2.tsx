import Administration2InputDrag from "@/components/administration2/InputDrag";
import Administration2Folders from "@/components/administration2/folders";
import Administration2Table from "@/components/administration2/table";
import { storeAdministration } from "@/stores/administration/administrationStore";

const Administration2 = () => {
  const AdministrationName = storeAdministration((state) => state.name);
  return (
    <div className="font-normal   w-full px-[4vw] py-[4vw] bg-primary min-h-screen">
      <header className=" text-secondary w-full h-14 md:h-16 xl:h-20 bg-tertiary flex items-center  rounded px-[2vw] relative">
        <div className="absolute top-[50%] left-[2vw] translate-y-[-50%] text-secondary ">
          {AdministrationName}
        </div>
        <input
          type="text"
          className="rounded h-[60%] sm:mx-auto ml-auto bg-primary border-secondary"
        />
      </header>
      <section className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(min(100%,500px),1fr))] mt-[2vw]">
        <Administration2InputDrag />
        <Administration2Folders />
      </section>
      <section className=" w-full overflow-x-auto rounded mt-8">
        <Administration2Table />
      </section>
    </div>
  );
};
export default Administration2;
