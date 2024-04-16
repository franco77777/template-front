export const ButtonsEdit = ({
  text,
  image,
  onClick,
}: {
  text: string;
  image: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={() => {
        if (onClick != null) {
          onClick();
        }
      }}
      className="flex w-full items-center justify-center gap-2 border bg-[#202020] px-10 py-4 text-center transition-all hover:bg-black max-lg:px-8 max-lg:py-2"
    >
      <img src={image} alt="edit" width={20} height={20} />
      {text}
    </button>
  );
};
