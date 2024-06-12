import { Route } from "@angular/router";

export default [
  { path: "", redirectTo: "form", pathMatch: "full" },
  {
    title: "表单",
    path: "form",
    data: { preload: true, key: "form" },
    loadComponent: () => import("./pages/form/form.component").then(m => m.FormComponent)
  }
] as Route[];
