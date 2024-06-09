import { Routes } from "@angular/router";

export const appRoutes: Routes = [
  //   { path: "self", redirectTo: "/login/login-form", pathMatch: "full" },
  { path: "", data: { preload: true }, loadChildren: () => import("./systems/pages/self/self-routing") }
];
