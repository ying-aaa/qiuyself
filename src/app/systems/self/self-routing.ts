import { Route } from "@angular/router";

export default [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    title: "首页",
    path: "home",
    data: { preload: true, key: "home" },
    loadComponent: () => import("./page/home/home.component").then(m => m.HomeComponent)
  }
] as Route[];
