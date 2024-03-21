import { DialogType } from "../../types";
import { DialogBox } from "../DialogBox";

import resume from "../../assets/resume/Nitesh_Khatri_Resume.pdf";

export const ResumeModel: React.FC<{
  isOpen: boolean;
  handleOpen: (model: DialogType) => void;
}> = ({ isOpen, handleOpen }) => {
  return (
    <DialogBox
      isOpen={isOpen}
      handleOpen={handleOpen}
      dialogType="resume"
      size="3xl"
      content={<ResumeContent />}
    />
  );
};

const ResumeContent = () => {
  return (
    <>
      <iframe src={resume} className="min-w-[300px] md:w-[700px] h-[70vh]" />
      <div className="mt-4 flex justify-center">
        <a
          className="text-white text-base link hover:text-gray-300 flex items-center gap-1.5"
          href={resume}
          target="_blank"
          download="Nitesh_Khatri_Resume.pdf"
          tabIndex={-1}
        >
          <p>Download</p>
          <i className="bi bi-file-earmark-arrow-down-fill text-sm"></i>
        </a>
      </div>
    </>
  );
};
