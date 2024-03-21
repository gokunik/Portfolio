import { AnimatePresence, motion } from "framer-motion";
import profilePicture from "./assets/images/profile_picture.jpg";
import "./App.css";

import styles from "./styles.module.css";
import { useState } from "react";
import { DialogType } from "./types";
import { BioModel } from "./components/BioModel";
import { ResumeModel } from "./components/ResumeModel";
import { ProjectsModel } from "./components/ProjectsModel";
import { ContactModel } from "./components/ContactModel";

function App() {
  const [modelState, setModelState] = useState({
    bio: false,
    resume: false,
    projects: false,
    contact: false,
  });

  const handleModelState = (model: DialogType) => {
    setModelState({ ...modelState, [model]: !modelState[model] });
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={styles["wrapper"]}
        initial={{ filter: "blur(50px)" }}
        animate={{ filter: "blur(0px)" }}
        exit={{ filter: "blur(10px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <section className={styles["container-box"]}>
          <div className={styles["logo"]}>
            <img src={profilePicture} alt="Profile picture" />
          </div>
          <motion.div
            initial={{ maxHeight: 0, padding: 0 }}
            animate={{
              maxHeight: "100%",
              paddingTop: "3rem",
              paddingBottom: "3rem",
            }}
            exit={{ height: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
            className={styles["content"]}
          >
            <div className={styles["inner"]}>
              <h1>Hi, I'm Nitesh Khatri</h1>
              <p className="m-0">Associate Software Engineer</p>
            </div>
          </motion.div>
          <nav className={styles["nav-bar"]}>
            <ul className={styles["nav-list"]}>
              <li
                className={`${styles["nav-item"]} rounded-t-lg md:rounded-tr-none md:rounded-l-lg`}
                onClick={() => handleModelState("bio")}
              >
                Bio
              </li>
              <li
                className={styles["nav-item"]}
                onClick={() => handleModelState("projects")}
              >
                Projects
              </li>
              <li
                className={styles["nav-item"]}
                onClick={() => handleModelState("resume")}
              >
                Resume
              </li>
              <li
                className={`${styles["nav-item"]} rounded-b-lg md:rounded-bl-none md:rounded-r-lg md:border-r`}
                onClick={() => handleModelState("contact")}
              >
                Contact
              </li>
            </ul>
          </nav>
          <footer className={styles["footer"]}>
            <ul className="flex gap-16 justify-center">
              <li>
                <a href="https://www.linkedin.com/in/gokunik/" target="_blank">
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/gokunik" target="_blank">
                  <i className="bi bi-github"></i>
                </a>
              </li>
              <li>
                <a href="https://codepen.io/gokunik" target="_blank">
                  <i className="bi bi-code-slash"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/goku_nik" target="_blank">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
            </ul>
          </footer>
        </section>

        {/* dialog box */}
        <BioModel isOpen={modelState.bio} handleOpen={handleModelState} />
        <ProjectsModel
          isOpen={modelState.projects}
          handleOpen={handleModelState}
        />
        <ResumeModel isOpen={modelState.resume} handleOpen={handleModelState} />
        <ContactModel
          isOpen={modelState.contact}
          handleOpen={handleModelState}
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
