import { FileText } from "lucide-react";

const UserProfileFiles = () => {
  return (
    <ul className="flex  text-secondary border-2 border-secondary rounded px-4">
      <li>
        <FileText />
        DNI
      </li>
      <li>
        <FileText />
        CV
      </li>
      <li>
        <FileText />
        other
      </li>
    </ul>
  );
};
export default UserProfileFiles;
