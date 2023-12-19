import { lazy } from "react";
import { ModulConfig } from "../modules.types";

const moduleConfig: ModulConfig = {
  route: {
    path: "/projects",
    menu: {
      label: "Projects",
    },
  },
  component: lazy(() => import("./projects")),
};

export default moduleConfig;
