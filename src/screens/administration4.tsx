import Administration2InputDrag from "@/components/administration2/InputDrag";

const Administration4 = () => {
  return (
    <div className="font-normal min-h-screen bg-primary px-[4vw] py-[4vw] w-full">
      <div className="text-secondary text-2xl">Create Organization</div>
      <div className="flex gap-4 text-secondary text-2xl w-full justify-center mb-8">
        <div>Create organization</div>
        <div>/</div>
        <div>Add Branch</div>
      </div>
      <section className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(min(100%,500px),1fr))] mt-[2vw]">
        <Administration2InputDrag />

        <ul className="text-secondary flex flex-col gap-4 mt-4 w-full items-center">
          <li>
            <div>Name Organization</div>
            <input
              type="text"
              className="border-2 w-[400px] border-secondary text-secondary bg-tertiary rounded"
            />
          </li>
          <li>
            <div>Country</div>
            <input
              type="text"
              className="border-2 w-[400px] border-secondary text-secondary bg-tertiary rounded"
            />
          </li>
          <li>
            {" "}
            <div>State</div>
            <input
              type="text"
              className="border-2 w-[400px] border-secondary text-secondary bg-tertiary rounded"
            />
          </li>
          <li>
            {" "}
            <div>Address</div>
            <input
              type="text"
              className="border-2 w-[400px] border-secondary text-secondary bg-tertiary rounded"
            />
          </li>
          <li>
            {" "}
            <div>Branch</div>
            <select
              name=""
              id=""
              className="border-2 w-[400px] border-secondary text-secondary bg-tertiary rounded"
            >
              <option value="" disabled selected>
                select branch
              </option>
              <option value="">new branch</option>
              <option value="">branch 1</option>
              <option value="">branch 2</option>
            </select>
          </li>
          <li>
            {" "}
            <div>Name Organization</div>
            <input
              type="text"
              className="border-2 w-[400px] border-secondary text-secondary bg-tertiary rounded"
            />
          </li>
          <li>
            <button className="block mt-4 p-2 mx-auto rounded w-fit cursor-pointer  text-base bg-secondary text-black hover:scale-105 duration-150 ">
              Add Organization
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
};
export default Administration4;
