import { ButtonsEdit } from "../buttons/buttonsEdit";

interface EditConfigProps {
  displayEdit: string;
  onEdit: () => void;
}

export const EditConfig: React.FC<EditConfigProps> = ({
  displayEdit,
  onEdit,
}) => {
  return (
    <div>
      <div
        className={`fixed bottom-0 ${displayEdit} w-full justify-between border-2 border-white bg-[#121212] p-5 text-white`}
      >
        <div className="mx-auto flex w-full justify-between max-lg:flex-col max-lg:gap-5">
          <div className="flex w-2/4 flex-col gap-4 max-lg:w-full">
            <h2 className="font-bold">You are in Edit Mode</h2>
            <p>
              This means you can make modifications to your config, and preview
              the results, but until you save, none of your changes will be
              preserved.
            </p>

            <div className="flex flex-col gap-3">
              <p className="font-bold">Edit Site Data</p>

              <div className="grid grid-cols-2 gap-3">
                <ButtonsEdit text="Edit Page Info" image="./icons/quote.svg" />
                <ButtonsEdit
                  text="Edit App Config"
                  image="./icons/edit_app.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p>Config Saving Options</p>
            <div className="grid grid-cols-2 gap-3">
              <ButtonsEdit text="Save Locally" image="./icons/memory.svg" />
              <ButtonsEdit text="Save to Disk" image="./icons/disk.svg" />
              <ButtonsEdit text="Export Config" image="./icons/export.svg" />
              <ButtonsEdit
                text="Cancel Edit"
                image="./icons/cancel.svg"
                onClick={onEdit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
