import { Copy, Settings, UserRound } from "lucide-react";

const PersonalInformation = () => {
  return (
    <div className=" border-2 border-secondary rounded text-secondary items-cemter justify-center flex gap-8 p-4">
      <div className="w-1/2  rounded">
        <UserRound size={140} strokeWidth={2} className="mx-auto" />
      </div>
      <ul className="w-1/2 flex flex-col justify-between bg-primary rounded">
        <li className="flex gap-2">
          <div>name</div>
          <Copy size={20} strokeWidth={2} />
        </li>
        <li className="flex gap-2">
          <div>phone</div>
          <Copy size={20} strokeWidth={2} />
        </li>
        <li className="flex gap-2">
          <div>email</div>
          <Copy size={20} strokeWidth={2} />
        </li>
        <li className="flex gap-2">
          <div>github</div>
          <Copy size={20} strokeWidth={2} />
        </li>
        <li className="flex justify-between">
          <div>area</div>
          <Settings size={20} strokeWidth={2} />
        </li>
      </ul>
    </div>
  );
};
export default PersonalInformation;
