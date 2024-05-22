const UserProfileAssignedProjects = () => {
  return (
    <div className="mt-8 border-secondary border-2 rounded overflow-x-auto">
      <table className="text-secondary w-full ">
        <th
          colSpan={6}
          className="  text-2xl bg-secondary  text-black text-center  "
        >
          Assigned Projects
        </th>
        <tr className="bg-tertiary ">
          <th className="text-center text-xl font-normal">project code</th>
          <th className="text-center text-xl font-normal border-l-2 border-secondary">
            user
          </th>
          <th className="text-center text-xl font-normal border-l-2 border-secondary">
            department
          </th>
          <th className="text-center text-xl font-normal border-l-2 border-secondary">
            state
          </th>
          <th className="text-center text-xl font-normal border-l-2 border-secondary">
            start date
          </th>
          <th className="text-center text-xl font-normal border-l-2 border-secondary">
            end date
          </th>
        </tr>
        <tr className="border-t-2 border-secondary">
          <td className="text-center">1</td>
          <td className="border-l-2 border-secondary text-center">zucadev</td>
          <td className="border-l-2 border-secondary text-center">backend</td>
          <td className="border-l-2 border-secondary text-center">
            <div className=" h-6 w-6 rounded-full bg-red-500 mx-auto"></div>
          </td>
          <td className="border-l-2 border-secondary text-center">
            27/12/2020
          </td>
          <td className="border-l-2 border-secondary text-center">
            27/12/2020
          </td>
        </tr>
        <tr className="border-t-2 border-secondary">
          <td className="text-center">1</td>
          <td className="border-l-2 border-secondary text-center">zucadev</td>
          <td className="border-l-2 border-secondary text-center">backend</td>
          <td className="border-l-2 border-secondary text-center">
            <div className=" h-6 w-6 rounded-full bg-red-500 mx-auto"></div>
          </td>
          <td className="border-l-2 border-secondary text-center">
            27/12/2020
          </td>
          <td className="border-l-2 border-secondary text-center">
            27/12/2020
          </td>
        </tr>
        <tr className="border-t-2 border-secondary">
          <td className="text-center">1</td>
          <td className="border-l-2 border-secondary text-center">zucadev</td>
          <td className="border-l-2 border-secondary text-center">backend</td>
          <td className="border-l-2 border-secondary text-center">
            <div className=" h-6 w-6 rounded-full bg-red-500 mx-auto"></div>
          </td>
          <td className="border-l-2 border-secondary text-center">
            27/12/2020
          </td>
          <td className="border-l-2 border-secondary text-center">
            27/12/2020
          </td>
        </tr>
      </table>
    </div>
  );
};
export default UserProfileAssignedProjects;
