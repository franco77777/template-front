const Administration2Table = () => {
  return (
    <table className="border-2 bg-tertiary border-secondary rounded text-base  w-full text-black">
      <tr className="bg-secondary ">
        <th className=" text-left ">Name</th>
        <th className=" text-left">ID</th>
        <th className=" text-left">Administration</th>
        <th className=" text-left">Branch</th>
        <th className=" text-left">Organization</th>
        <th className=" text-left">Users</th>
        <th className=" text-left"></th>
        <th className=" text-left"></th>
      </tr>
      <tr className="">
        <td className="text-secondary">gravitad</td>
        <td className="text-secondary">active</td>
        <td className="text-secondary">200</td>
        <td className="text-secondary">70</td>
        <td className="text-secondary">2</td>
        <td className="text-secondary">2</td>
        <td className="py-2">
          <button className="bg-secondary rounded py-[2px] px-2 text-black">
            drive
          </button>
        </td>
        <td className="text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
          </svg>
        </td>
      </tr>
      <tr className="border-t-2 border-secondary">
        <td className="text-secondary">gravitad</td>
        <td className="text-secondary">active</td>
        <td className="text-secondary">200</td>
        <td className="text-secondary">70</td>
        <td className="text-secondary">2</td>
        <td className="text-secondary">2</td>
        <td className="py-2">
          <button className="bg-secondary rounded py-[2px] px-2 text-black">
            drive
          </button>
        </td>
        <td className="text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
          </svg>
        </td>
      </tr>
    </table>
  );
};
export default Administration2Table;
