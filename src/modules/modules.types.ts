export type ModulConfig = {
  routes: [
    {
      path: string;
    },
  ];
  // component: () => import("./module-two.tsx"),
  // type instead of import
  component: () => Promise<{ default: React.ComponentType }>;
};
