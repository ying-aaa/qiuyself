import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { HomeComponent } from "./systems/self/page/home/home.component";

// import { HomeComponent } from "";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet #outlet="outlet"></router-outlet>
  `
})
export class AppComponent {
  title = "qiuyself";

  constructor() {}
}
