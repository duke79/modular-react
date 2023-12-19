import { ModulConfig } from "../modules.types";

const moduleConfig: ModulConfig = {
  routes: [
    {
      path: "/module-one",
    },
  ],
  component: () => import("./module-one.tsx"),
};

export default moduleConfig;
