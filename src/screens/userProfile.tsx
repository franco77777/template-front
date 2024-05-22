import UserProfileAddress from "@/components/userProfile/address";
import UserProfileFiles from "@/components/userProfile/files";
import PersonalInformation from "@/components/userProfile/personalInformation";

import { CircleUserRound, Settings, UsersRound } from "lucide-react";

const UserProfile = () => {
  return (
    <div className="font-normal text-base   w-full px-[4vw] py-[4vw] bg-primary min-h-screen">
      <header className=" text-secondary w-full h-14 md:h-16 xl:h-20 bg-tertiary flex items-center justify-between rounded px-[2vw] ">
        <div className="text-[clamp(1rem,3cqw,2rem)] ">Fran Castillo</div>
        <div className="cursor-pointer hover:scale-105 duration-100">
          <CircleUserRound size={40} strokeWidth={2} />
        </div>
      </header>
      <section className="text-secondary w-full h-16 md:h-20 xl:h-24 bg-tertiary flex items-center justify-between rounded px-[2vw] mt-4">
        <div className="text-[clamp(1.25rem,3cqw,3rem)]">Gravitad</div>
        <input
          type="text"
          className="rounded h-10 bg-primary border-secondary lg:w-[300px]"
        />
        <div className="flex gap-2">
          <UsersRound size={40} strokeWidth={2} />
          <UsersRound size={40} strokeWidth={2} />
          <Settings size={40} strokeWidth={2} />
        </div>
      </section>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,500px),1fr))] gap-4 mt-8">
        <PersonalInformation />
        <div>
          <UserProfileAddress />
          <UserProfileFiles />
        </div>
      </section>
    </div>
  );
};
export default UserProfile;
