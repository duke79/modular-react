export type ModulConfig = {
  routes: [
    {
      path: string;
    },
  ];
  // component: () => import("./module-two.tsx"),
  // type instead of import
  component: React.LazyExoticComponent<React.ComponentType>;
};
