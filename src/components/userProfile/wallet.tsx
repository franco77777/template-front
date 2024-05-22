import { Copy } from "lucide-react";

const UserProfileWallet = () => {
  return (
    <ul className="flex flex-col gap-4  text-secondary border-2 border-secondary rounded p-4">
      <li className="flex flex-col  gap-2">
        <div>Wallet:</div>
        <div className="flex gap-4">
          <div>0xb0A7c00EA503AdbdFE0071bdd9eB6Fbb18e7C6B5 </div>
          <Copy size={20} strokeWidth={2} />
        </div>
      </li>
      <li className="flex flex-col gap-2 ">
        <div>Red:</div>
        <div>Tron - TRC20</div>
      </li>
    </ul>
  );
};
export default UserProfileWallet;
