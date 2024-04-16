import { MediaData } from "@/data/mediaEntertainment";

import { ButtonAddItem } from "../buttons/buttonAddItem";

export const MediaEntertainment = ({
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
  const filterMedia = MediaData.filter((item) =>
    item.title.toLowerCase().includes(filterText)
  );

  return (
    <div className="relative">
      <div className="mx-auto mt-8 grid divide-y divide-neutral-200">
        <div className="">
          <details open className="group bg-[#121212]">
            <summary className="flex w-full cursor-pointer list-none items-center justify-between bg-[#db78fc] p-2 font-medium">
              <div className="flex items-center justify-start gap-5">
                <img
                  src="./media_entertainment/media.svg"
                  alt="media"
                  width={25}
                  height={25}
                  className="h-[25px]"
                />
                <span className="font-mono ">Media & Entertainment</span>
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
            <div className={`grid ${displayButtons}`}>
              {filterMedia.map((item) => (
                <div
                  key={item.id}
                  className={`m-2 ${widthButton} grow cursor-pointer items-center rounded-md bg-neutral-800 p-1 text-center text-white shadow-md transition hover:text-[#db78fc] hover:shadow-[#db78fc]`}
                >
                  <p className="m-1 text-xs">{item.title}</p>
                  <img
                    src={item.img}
                    alt={item.title}
                    width={widthIcon}
                    height={widthIcon}
                    className="size-auto"
                  />
                </div>
              ))}

              <ButtonAddItem setEdit={setEdit} color="#db78fc" />
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};
