import TelegramIcon from "../../assets/Img/telegram.png";
import DiscordIcon from "../../assets/Img/discord.png";
import LinkedinIcon from "../../assets/Img/linkedin.png";
import GithubIcon from "../../assets/Img/github.png";
import { Settings } from "lucide-react";
import { SecondaryTextExist, UseBgDarker, UsePrimary } from "@/theme/theming";
const UserProfileContact = () => {
  return (
    <div
      style={{
        background: UseBgDarker(),
        color: SecondaryTextExist(),
        borderColor: UsePrimary(),
      }}
      className="flex flex-col gap-2  border-2  rounded-2xl p-4"
    >
      <div>Contact:</div>
      <ul className="flex flex-col gap-2 ">
        <li className="flex gap-4">
          <img src={TelegramIcon} alt="" className="w-6 h-6" />
          <div>zuccarinidavid</div>
        </li>
        <li className="flex gap-4">
          <img src={DiscordIcon} alt="" className="w-6 h-6" />
          <div>zuccarinidavid</div>
        </li>
        <li className="flex gap-4">
          <img src={LinkedinIcon} alt="" className="w-6 h-6" />
          <div>zuccarinidavid</div>
        </li>
        <li className="flex justify-between">
          <div className="flex gap-4">
            <img
              src={GithubIcon}
              alt=""
              className="w-6 h-6 bg-white rounded-md  border-black "
            />

            <div>zuccarinidavid</div>
          </div>
          <Settings size={20} strokeWidth={2} />
        </li>
      </ul>
    </div>
  );
};
export default UserProfileContact;
