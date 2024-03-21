import { DialogType } from "../../types";
import { DialogBox } from "../DialogBox";

export const ProjectsModel: React.FC<{
  isOpen: boolean;
  handleOpen: (model: DialogType) => void;
}> = ({ isOpen, handleOpen }) => {
  return (
    <DialogBox
      isOpen={isOpen}
      handleOpen={handleOpen}
      dialogType="projects"
      size="2xl"
      content={<ProjectContent />}
    />
  );
};

const ProjectContent = () => {
  return (
    <div className="sm:mt-8 sm:mx-10">
      <article className="mt-6  pb-4 border-b border-b-gray-400/50">
        <h2 className="text-lg">Redrop | Drag and Drop Library</h2>
        <div className="mb-4 mt-1">
          <a
            className="text-white text-xs link hover:text-gray-300 flex items-center gap-1.5"
            href="http://github.com/gokunik/redrop"
            target="_blank"
            tabIndex={-1}
          >
            Github <i className="bi bi-box-arrow-up-right text-[10px]"></i>
          </a>
        </div>
        <p>
          ReDrop is a JavaScript drag and drop library, offering an intuitive
          alternative to the native HTML5 drag and drop API. ReDrop tries to
          make drag and drop as simple, quick and easy as possible.
        </p>
      </article>

      <article className="mt-6  pb-4 border-b border-b-gray-400/50">
        <h2 className="text-lg">Weather App using ReactJs</h2>
        <div className="mb-4 mt-1 flex gap-4">
          <a
            className="text-white text-xs link hover:text-gray-300 flex items-center gap-1.5"
            href="https://github.com/gokunik/weatherApp"
            target="_blank"
            tabIndex={-1}
          >
            Github <i className="bi bi-box-arrow-up-right text-[10px]"></i>
          </a>
          <a
            className="text-white text-xs link hover:text-gray-300 flex items-center gap-1.5"
            href="https://weather-app-gokunik.vercel.app/weatherApp"
            target="_blank"
            tabIndex={-1}
          >
            Live <i className="bi bi-box-arrow-up-right text-[10px]"></i>
          </a>
        </div>
        <p>
          Created a weather app using Open weather API to display weather
          details and geo location api to get city details. Using Pixels photo
          API to change the background to the current selected city
        </p>
      </article>

      <article className="mt-6 pb-4 border-b border-b-gray-400/50">
        <h2 className="text-lg">Todo App | Backend</h2>
        <div className="mb-4 mt-1 flex gap-4">
          <a
            className="text-white text-xs link hover:text-gray-300 flex items-center gap-1.5"
            href="https://github.com/gokunik/Todo-App-Backend"
            target="_blank"
            tabIndex={-1}
          >
            Github <i className="bi bi-box-arrow-up-right text-[10px]"></i>
          </a>
        </div>
        <p>
          Created a backend for todo app using express and mongodb. Supports
          CRUD operation to get, create, update and delete todos. Implementated
          login and signup using JWT and input vaidation using ZOD
        </p>
      </article>
    </div>
  );
};
