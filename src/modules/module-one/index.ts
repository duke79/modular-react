import { lazy } from "react";
import { ModulConfig } from "../modules.types";

const moduleConfig: ModulConfig = {
  routes: [
    {
      path: "/module-one",
    },
  ],
  component: lazy(() => import("./module-one")),
};

export default moduleConfig;
