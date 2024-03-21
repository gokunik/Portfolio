import { DialogType } from "../../types";
import { DialogBox } from "../DialogBox";
import bioCover from "../../assets/images/bio_cover.png";
import styles from "./styles.module.css";

import * as icons from "../svgs/index.ts";

export const BioModel: React.FC<{
  isOpen: boolean;
  handleOpen: (model: DialogType) => void;
}> = ({ isOpen, handleOpen }) => {
  return (
    <DialogBox
      isOpen={isOpen}
      handleOpen={handleOpen}
      dialogType="bio"
      size="2xl"
      content={<BioContent />}
    />
  );
};

const BioContent = () => {
  return (
    <div className="inner-content flex flex-col gap-2">
      <div>
        <img src={bioCover} alt="Bio cover" />
      </div>
      <div className={styles["content"]}>
        <h2>Hey, I am Nitesh 👋</h2>
        <p>
          Software developer building web apps. I'm a JavaScript geek and love
          building stuff in ReactJs. I can convert design into pixel perfect
          applications.
          <br />
          <br />
          My ultimate goal is to become a better developer who knows full stack,
          from frontend to backend, Web to mobile app development and design,
          not only UX/UI but also system design and architecture.
        </p>
        <br />

        <div className="mb-8">
          <p className="mb-4 text-white/95">
            Following are some of my most frequently used technologies:
          </p>
          <div className="flex flex-wrap gap-2">
            <div className={styles["chip"]}>
              <img src={icons.javascript} width={20} alt="" />
              <p>JavaScript</p>
            </div>
            <div className={styles["chip"]}>
              <img src={icons.typescript} width={20} alt="" />
              <p>TypeScript</p>
            </div>
            <div className={styles["chip"]}>
              <img src={icons.react} width={20} alt="" />
              <p>React</p>
            </div>
            <div className={styles["chip"]}>
              <img src={icons.nextjs} width={20} alt="" />
              <p>NextJS</p>
            </div>
            <div className={styles["chip"]}>
              <img src={icons.nodejs} width={20} alt="" />
              <p>NodeJS</p>
            </div>
            <div className={styles["chip"]}>
              <div className="flex items-center">
                <img
                  className="rounded-sm"
                  src={icons.expressJs}
                  width={15}
                  alt=""
                />
              </div>
              <p>ExpressJS</p>
            </div>
            <div className={styles["chip"]}>
              <img src={icons.html} width={20} alt="" />
              <p>HTML</p>
            </div>
            <div className={styles["chip"]}>
              <img src={icons.css} width={20} alt="" />
              <p>CSS</p>
            </div>

            <div className={styles["chip"]}>
              <img src={icons.tailwindcss} width={20} alt="" />
              <p>Tailwind</p>
            </div>

            <div className={styles["chip"]}>
              <img src={icons.git} width={20} alt="" />
              <p>Git</p>
            </div>
            <div className={styles["chip"]}>
              <img src={icons.github} width={20} alt="" />
              <p>Github</p>
            </div>
            <div className={styles["chip"]}>
              <img src={icons.mongodb} width={20} alt="" />
              <p>MongoDB</p>
            </div>

            <div className={styles["chip"]}>
              <img src={icons.vite} width={20} alt="" />
              <p>Vite</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
