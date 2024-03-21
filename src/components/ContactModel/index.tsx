import { DialogType } from "../../types";
import { DialogBox } from "../DialogBox";

export const ContactModel: React.FC<{
  isOpen: boolean;
  handleOpen: (model: DialogType) => void;
}> = ({ isOpen, handleOpen }) => {
  return (
    <DialogBox
      isOpen={isOpen}
      handleOpen={handleOpen}
      dialogType="contact"
      size="2xl"
      content={<ContactContent />}
    />
  );
};

const ContactContent = () => {
  return (
    <div className="mt-6">
      <p>
        For any queries, please feel free to reach out to me at:{" "}
        <a
          className="text-white link hover:text-gray-300 underline hover:underline"
          href="mailto:niteshkhatri2226@gmail.com"
          tabIndex={-1}
        >
          niteshkhatri2226@gmail.com
        </a>
      </p>

      <p className="mt-4">
        You can also reach out to me on{" "}
        <a
          className="text-white link hover:text-gray-300 underline hover:underline"
          href="https://twitter.com/goku_nik"
          target="_blank"
          rel="noreferrer"
          tabIndex={-1}
        >
          Twitter
        </a>
        ,{" "}
        <a
          className="text-white link hover:text-gray-300 underline hover:underline"
          href="https://github.com/gokunik"
          target="_blank"
          rel="noreferrer"
          tabIndex={-1}
        >
          Github
        </a>
        , or{" "}
        <a
          className="text-white link hover:text-gray-300 underline hover:underline"
          href="https://www.linkedin.com/in/gokunik"
          target="_blank"
          rel="noreferrer"
          tabIndex={-1}
        >
          LinkedIn
        </a>
        .
      </p>
    </div>
  );
};
