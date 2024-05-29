import { SquarePlus } from "lucide-react";

const Administration2Folders = () => {
  return (
    <ul className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(350px,1fr))] grid-rows-[repeat(auto-fill,minmax(120px,1fr))]">
      <li className="border-4 border-secondary rounded ">
        <div className="bg-secondary text-black">Folder</div>
        <div className="flex gap-4 bg-tertiary p-2">
          <ul className="grid grid-cols-4 text-secondary w-1/2 gap-2">
            <li className="bg-primary">1</li>
            <li className="bg-primary">2</li>
            <li className="bg-primary">3</li>
            <li className="bg-primary">4</li>
            <li className="bg-primary">5</li>
            <li className="bg-primary">6</li>
            <li className="bg-primary">7</li>
            <li className="bg-primary">8</li>
            <li className="bg-primary">9</li>
            <li className="bg-primary">10</li>
            <li className="bg-primary">11</li>
            <li className="bg-primary">12</li>
          </ul>
          <div className="flex flex-col justify-center items-center gap-2 w-1/2">
            <input
              type="text"
              className="rounded h-10   bg-primary border-secondary w-full"
            />
            <div className="text-secondary">
              <SquarePlus
                size={24}
                strokeWidth={2}
                className="cursor-pointer hover:scale-105 duration-150 "
              />
            </div>
          </div>
        </div>
      </li>
      <li className="border-4 border-secondary rounded">
        <div className="bg-secondary text-black">Users</div>
        <div className="flex gap-4 bg-tertiary p-2">
          <ul className="grid grid-cols-4 text-secondary w-1/2 gap-2">
            <li className="bg-primary">1</li>
            <li className="bg-primary">2</li>
            <li className="bg-primary">3</li>
            <li className="bg-primary">4</li>
            <li className="bg-primary">5</li>
            <li className="bg-primary">6</li>
            <li className="bg-primary">7</li>
            <li className="bg-primary">8</li>
            <li className="bg-primary">9</li>
            <li className="bg-primary">10</li>
            <li className="bg-primary">11</li>
            <li className="bg-primary">12</li>
          </ul>
          <div className="flex flex-col justify-center items-center gap-2 w-1/2">
            <input
              type="text"
              className="rounded h-10   bg-primary border-secondary w-full"
            />
            <div className="text-secondary">
              {" "}
              <SquarePlus
                size={24}
                strokeWidth={2}
                className="cursor-pointer hover:scale-105 duration-150 "
              />
            </div>
          </div>
        </div>
      </li>
      <li className="border-4 border-secondary rounded">
        <div className="bg-secondary text-black">Organizations</div>
        <div className="flex gap-4 bg-tertiary p-2">
          <ul className="grid grid-cols-4 text-secondary w-1/2 gap-2">
            <li className="bg-primary">1</li>
            <li className="bg-primary">2</li>
            <li className="bg-primary">3</li>
            <li className="bg-primary">4</li>
            <li className="bg-primary">5</li>
            <li className="bg-primary">6</li>
            <li className="bg-primary">7</li>
            <li className="bg-primary">8</li>
            <li className="bg-primary">9</li>
            <li className="bg-primary">10</li>
            <li className="bg-primary">11</li>
            <li className="bg-primary">12</li>
          </ul>
          <div className="flex flex-col justify-center items-center gap-2 w-1/2">
            <input
              type="text"
              className="rounded h-10   bg-primary border-secondary w-full"
            />
            <div className="text-secondary">
              {" "}
              <SquarePlus
                size={24}
                strokeWidth={2}
                className="cursor-pointer hover:scale-105 duration-150 "
              />
            </div>
          </div>
        </div>
      </li>
      <li className="border-4 border-secondary rounded">
        <div className="bg-secondary text-black">Branch</div>
        <div className="flex gap-4 bg-tertiary p-2">
          <ul className="grid grid-cols-4 text-secondary w-1/2 gap-2">
            <li className="bg-primary">1</li>
            <li className="bg-primary">2</li>
            <li className="bg-primary">3</li>
            <li className="bg-primary">4</li>
            <li className="bg-primary">5</li>
            <li className="bg-primary">6</li>
            <li className="bg-primary">7</li>
            <li className="bg-primary">8</li>
            <li className="bg-primary">9</li>
            <li className="bg-primary">10</li>
            <li className="bg-primary">11</li>
            <li className="bg-primary">12</li>
          </ul>
          <div className="flex flex-col justify-center items-center gap-2 w-1/2">
            <input
              type="text"
              className="rounded h-10   bg-primary border-secondary w-full"
            />
            <div className="text-secondary">
              {" "}
              <SquarePlus
                size={24}
                strokeWidth={2}
                className="cursor-pointer hover:scale-105 duration-150 "
              />
            </div>
          </div>
        </div>
      </li>
      <li className="border-4 border-secondary rounded">
        <div className="bg-secondary text-black">Department</div>
        <div className="flex gap-4 bg-tertiary p-2">
          <ul className="grid grid-cols-4 text-secondary w-1/2 gap-2">
            <li className="bg-primary">1</li>
            <li className="bg-primary">2</li>
            <li className="bg-primary">3</li>
            <li className="bg-primary">4</li>
            <li className="bg-primary">5</li>
            <li className="bg-primary">6</li>
            <li className="bg-primary">7</li>
            <li className="bg-primary">8</li>
            <li className="bg-primary">9</li>
            <li className="bg-primary">10</li>
            <li className="bg-primary">11</li>
            <li className="bg-primary">12</li>
          </ul>
          <div className="flex flex-col justify-center items-center gap-2 w-1/2">
            <input
              type="text"
              className="rounded h-10   bg-primary border-secondary w-full"
            />
            <div className="text-secondary">
              {" "}
              <SquarePlus
                size={24}
                strokeWidth={2}
                className="cursor-pointer hover:scale-105 duration-150 "
              />
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};
export default Administration2Folders;
