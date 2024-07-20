import { modalGlobalAdmin3Options } from "../types/globalAdmin3Types";

const ModalHint = ({
  handleModalPageOptions: handleCanvas,
  mouseLeave,
  mouseOver,
}: modalGlobalAdmin3Options) => {
  return (
    <div
      onMouseLeave={(e) => mouseLeave(e)}
      onMouseOver={(e) => mouseOver(e)}
      onClick={() => handleCanvas("hint")}
      className={`py-1 w-full rounded flex gap-2 cursor-pointer hover:scale-105 duration-150 `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 16"
        preserveAspectRatio="xMidYMid meet"
        className=" w-5 h-5 pointer-events-none"
      >
        <g fill="currentColor" clipPath="url(#InfoCircle_svg__a)">
          <path
            fillRule="evenodd"
            d="M8 1.6a6.4 6.4 0 1 0 0 12.8A6.4 6.4 0 0 0 8 1.6ZM.4 8a7.6 7.6 0 1 1 15.2 0A7.6 7.6 0 0 1 .4 8Z"
            clipRule="evenodd"
          ></path>
          <path
            fillRule="evenodd"
            d="M5.4 7a.6.6 0 0 1 .6-.6h2a.6.6 0 0 1 .6.6v3.9H10a.6.6 0 0 1 0 1.2H6a.6.6 0 1 1 0-1.2h1.4V7.6H6a.6.6 0 0 1-.6-.6Z"
            clipRule="evenodd"
          ></path>
          <path d="M8 3.6a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8Z"></path>
        </g>
        <defs>
          <clipPath id="InfoCircle_svg__a">
            <path fill="#fff" d="M0 0h16v16H0z"></path>
          </clipPath>
        </defs>
      </svg>

      <div className="pointer-events-none">Hint</div>
    </div>
  );
};
export default ModalHint;
