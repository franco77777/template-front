import { SystemMonitoringData } from "@/data/mediaEntertainment";

import { ButtonAddItem } from "../buttons/buttonAddItem";

export const SystemMonitoring = ({
  widthButton,
  widthIcon,
  displayButtons,
  setEdit,
  filterText,
}: {
  widthButton: string;
  widthIcon: number;
  displayButtons: string;
  setEdit: string;
  filterText: string;
}) => {
  const filterSystem = SystemMonitoringData.filter((item) =>
    item.title.toLowerCase().includes(filterText)
  );

  return (
    <div>
      <div className="mx-auto  px-5 ">
        <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
          <div className="">
            <details open className="group bg-[#121212]">
              <summary className="flex cursor-pointer list-none items-center justify-between bg-[#dcff5a] p-2 font-medium">
                <div className="flex items-center justify-start gap-5">
                  <img
                    src="./system_monitoring/system_monitoring.svg"
                    alt="media"
                    width={25}
                    height={25}
                    className="w-[25px]"
                  />
                  <span className="font-mono font-medium">
                    System Monitoring
                  </span>
                </div>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className={`${displayButtons}`}>
                {filterSystem.map((item) => (
                  <div
                    key={item.id}
                    className={`m-2 ${widthButton} grow cursor-pointer items-center rounded-md bg-neutral-800 p-1 text-center text-white shadow-md transition hover:text-[#dcff5a] hover:shadow-[#dcff5a]`}
                  >
                    <p className="m-1 text-xs">{item.title}</p>
                    <img
                      src={item.img}
                      alt={item.title}
                      width={widthIcon}
                      height={widthIcon}
                      className="h-auto w-auto"
                    />
                  </div>
                ))}
                <ButtonAddItem setEdit={setEdit} color="#dcff5a" />
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};
