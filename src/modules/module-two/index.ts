import { ModulConfig } from "../modules.types";

const moduleConfig: ModulConfig = {
  routes: [
    {
      path: "/module-two",
    },
  ],
  component: () => import("./module-two.tsx"),
};

export default moduleConfig;
