import Administration2Table from "@/components/administration2/table";
import { useNavigate } from "react-router-dom";

const Administration3 = () => {
  const navigate = useNavigate();
  const handlePage = () => {
    navigate("/administration-4");
  };
  return (
    <div className=" font-normal min-h-screen bg-primary px-[4vw] py-[4vw] w-full">
      <div className="text-secondary w-full h-12 md:h-14 xl:h-16 bg-tertiary rounded bg  flex items-center justify-between px-[2vw]">
        <div>user name </div>
        <div>user image</div>
      </div>
      <div className="  overflow-x-auto rounded mt-8">
        <Administration2Table />
      </div>

      <button
        onClick={handlePage}
        className="block mt-4 p-2 rounded w-fit cursor-pointer ml-auto text-base bg-secondary text-black hover:scale-105 duration-150 "
      >
        Add Organization
      </button>
    </div>
  );
};
export default Administration3;
