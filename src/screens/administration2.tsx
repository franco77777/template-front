import Administration2InputDrag from "@/components/administration2/InputDrag";
import Administration2Folders from "@/components/administration2/folders";
import Administration2Table from "@/components/administration2/table";
import { storeAdministration } from "@/stores/administration/administrationStore";
import {
  SecondaryExist,
  UseBg,
  UseBgDarker,
  UsePrimary,
} from "@/theme/theming";

const Administration2 = () => {
  const AdministrationName = storeAdministration((state) => state.name);
  return (
    <div className="font-normal   w-full px-[4vw] py-[4vw] bg-primary min-h-screen">
      <header
        style={{ color: UsePrimary(), backgroundColor: UseBgDarker() }}
        className="  w-full h-14 md:h-16 xl:h-20 bg-tertiary flex items-center  rounded px-[2vw] relative"
      >
        <div
          style={{
            backgroundImage: SecondaryExist(),
          }}
          className=" gradient-text   font-semibold absolute top-[50%] left-[2vw] translate-y-[-50%] text-secondary text-[clamp(2rem,3cqw,5rem)] "
        >
          {AdministrationName}
        </div>
        <input
          style={{
            borderColor: UsePrimary(),
            backgroundColor: UseBg(),
          }}
          type="text"
          className="rounded-xl h-[60%] md:h-10 sm:mx-auto ml-auto "
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
