import styles from "./home.module.scss";
import Menu from "../menu/menu";
import {Link} from 'react-router-dom';

const ModuleTwo = () => {
  return (
    <div className={styles.container}>
      <Menu />
      <div className={styles.intro}>
        <h1>Hello!</h1>
        <h3>
          I'm Pulkit Singh.
          <br />
          <br />
          I'm a software engineer.
          <br />
          <br />
          I have worked on a variety of <Link to={'/projects'}>Projects</Link>, ranging from web development
          to desktop applications development.
          <br />
          <br />
          My primary skills include Typescript, JavaScript, React, HTML, CSS.
          <br />
          <br />
          Apart from that I have also worked with Python, Node.js, Java, C++, C, Flutter, and more.
        </h3>
      </div>
    </div>
  );
};

export default ModuleTwo;
