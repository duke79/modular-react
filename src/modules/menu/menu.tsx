import { modules } from "../";
import styles from "./menu.module.scss";
import { Link } from "react-router-dom";

export const Component = () => {
  console.log(modules, window.location.pathname);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {modules
          .filter((m) => m.route.menu)
          .map(({ route }) => (
            <div
              key={route.path}
              className={`${styles.item} ${
                route.path === window.location.pathname ? styles.active : ""
              }`}
            >
              <Link to={route.path}>{route.menu?.label}</Link>
            </div>
          ))}
      </div>
      <div className={styles.right} />
    </div>
  );
};

export default Component;
