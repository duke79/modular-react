import { lazy } from "react";
import { ModulConfig } from "../modules.types";

const moduleConfig: ModulConfig = {
  route: {
    path: "/",
    menu: {
      label: "Home",
    },
  },
  component: lazy(() => import("./home")),
};

export default moduleConfig;
