import styles from "./projects.module.scss";
import Menu from "../menu/menu";

const clickAudio = new Audio("/click-button-140881.mp3");
clickAudio.volume = 0.002;

const ModuleTwo = () => {
  const projects = [
    {
      label: "Care for the living",
      summary:
        "During the COVID times oversaw & helped building an app to help patients connect with donors",
      codeLink: "https://github.com/carefortheliving/frontend",
      demoLink: "http://carefortheliving.org",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      label: "Gaveshak",
      summary:
        "Code & tools in the office didn’t change frequently, hence, got interested in doing something different with C++",
      codeLink: "https://github.com/duke79/Gaveshak",
      tech: ["C++", "Cmake", "Boost", "Gumbo"],
    },
    {
      label: "Abhidhana",
      summary:
        "Code & tools in the office didn’t change frequently, hence, got interested in doing something different with Flutter",
      codeLink: "https://github.com/duke79/Abhidhana",
      tech: ["Flutter"],
    },
    {
      label: "dukepy",
      summary:
        "Code & tools in the office didn’t change frequently, hence, got interested in doing something different with Python",
      codeLink: "https://github.com/duke79/dukepy",
      tech: ["Python"],
    },
    {
      label: "Samanvaya",
      summary:
        "Code & tools in the office didn’t change frequently, hence, got interested in doing something different with Python",
      codeLink: "https://github.com/duke79/Samanvaya",
      tech: ["Python"],
    },
    {
      label: "pyWeb",
      summary:
        "Code & tools in the office didn’t change frequently, hence, got interested in doing something different with Python",
      codeLink: "https://github.com/duke79/pyWeb",
      tech: ["Python"],
    },
    {
      label: "Kritrima",
      summary:
        "Code & tools in the office didn’t change frequently, hence, got interested in doing something different with Python",
      codeLink: "https://github.com/duke79/Kritrima",
      tech: ["Python"],
    },
    {
      label: "compro",
      summary:
        "Code & tools in the office didn’t change frequently, hence, got interested in doing something different with Python",
      codeLink: "https://github.com/duke79/compro",
      tech: ["Python"],
    },
    {
      label: "alligator",
      summary:
        "Code & tools in the office didn’t change frequently, hence, got interested in doing something different with Python",
      codeLink: "https://github.com/duke79/alligator",
      tech: ["Python"],
    },
    {
      label: "pysync",
      summary:
        "Code & tools in the office didn’t change frequently, hence, got interested in doing something different with Python",
      codeLink: "https://github.com/duke79/pysync",
      tech: ["Python"],
    },
    {
      label: "Yojaka",
      summary:
        "Code & tools in the office didn’t change frequently, hence, got interested in doing something different with Python",
      codeLink: "https://github.com/duke79/Yojaka",
      tech: ["Python"],
    },
  ];
  return (
    <div className={styles.container}>
      <Menu />
      <div className={styles.projects}>
        {projects.map((project) => (
          <div
            key={project.label}
            className={styles.project}
            onMouseEnter={() => clickAudio.play()}
            onMouseLeave={() => {
              clickAudio.pause();
              clickAudio.currentTime = 0;
            }}
          >
            <h3>{project.label}</h3>
            <p className={styles.summary}>{project.summary}</p>
            <div className={styles.links}>
              <a target="_blank" href={project.codeLink} rel="noreferrer">
                Code
              </a>
              {project.demoLink ? (
                <a target="_blank" href={project.demoLink} rel="noreferrer">
                  Demo
                </a>
              ) : null}
            </div>
            <div className={styles.tech}>
              {project.tech.map((tech) => (
                <div key={tech} className={styles.techItem}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className={styles.footer} />
        <div className={styles.footer} />
        <div className={styles.footer} />
        <div className={styles.footer} />
      </div>
    </div>
  );
};

export default ModuleTwo;
