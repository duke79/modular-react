import { modules } from "../";
import styles from "./menu.module.scss";
import { Link } from "react-router-dom";

export const Component = () => {
  const items = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {modules
          .filter((m) => m.route.menu)
          .map(({ route }) => (
            <div key={route.path} className={styles.item}>
              <Link to={route.path}>{route.menu?.label}</Link>
            </div>
          ))}
      </div>
      <div className={styles.right} />
    </div>
  );
};

export default Component;
