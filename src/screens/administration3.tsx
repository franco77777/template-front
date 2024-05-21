import Administration2Table from "@/components/administration2/table";

const Administration3 = () => {
  return (
    <div className=" font-normal min-h-screen bg-primary px-[4vw] py-[4vw]">
      <div className="text-secondary w-full h-12 md:h-14 xl:h-16 bg-tertiary rounded bg  flex items-center justify-between px-[2vw]">
        <div>user name </div>
        <div>user image</div>
      </div>
      <div className="  overflow-x-auto rounded mt-8">
        <Administration2Table />
      </div>
    </div>
  );
};
export default Administration3;
