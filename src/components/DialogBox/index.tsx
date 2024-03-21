import { Dialog, Transition } from "@headlessui/react";
import { DialogSize, DialogType } from "../../types";
import { Fragment } from "react";

export const DialogBox: React.FC<{
  isOpen: boolean;
  size: DialogSize;
  dialogType: DialogType;
  handleOpen: (model: DialogType) => void;
  content: JSX.Element;
}> = ({ isOpen, dialogType, size, handleOpen, content }) => {
  const maxWidth: Record<DialogSize, string> = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => handleOpen(dialogType)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`${maxWidth[size]} max-h-[90vh] overflow-y-auto  transform overflow-hidden rounded bg-[#292828fa] p-6 text-left align-middle shadow-xl transition-all`}
              >
                <div className="flex justify-between ">
                  <Dialog.Title
                    as="h2"
                    className="text-3xl font-medium leading-10 text-white capitalize"
                  >
                    {dialogType}
                  </Dialog.Title>
                  <button
                    onClick={() => handleOpen(dialogType)}
                    tabIndex={-1}
                    className="text-white"
                  >
                    <i className="bi bi-x-lg"></i>
                  </button>
                </div>
                <div className="mb-4 mt-2">
                  <p className=" sm:w-60 w-48 border-[0.8px] mb-2"></p>
                  <p className="sm:w-40 w-32 border-[0.8px]"></p>
                </div>
                <div className="text-sm text-white">{content}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
