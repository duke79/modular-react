import { lazy } from "react";
import { ModulConfig } from "../modules.types";

const moduleConfig: ModulConfig = {
  routes: [
    {
      path: "/module-two",
    },
  ],
  component: lazy(() => import("./module-two")),
};

export default moduleConfig;
