import { Route } from "@angular/router";

export default [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    title: "表单",
    path: "home",
    data: { preload: true, key: "home" },
    loadComponent: () => import("./pages/qy-lowcode-home/qy-lowcode-home.component").then(m => m.FormComponent)
  }
] as Route[];
