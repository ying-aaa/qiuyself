import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { HomeComponent } from "./systems/self/page/home/home.component";

// import { HomeComponent } from "";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  template: `
    <div>你好世界</div>
    <qy-home></qy-home>
  `
})
export class AppComponent {
  title = "qiuyself";

  constructor() {}
}
