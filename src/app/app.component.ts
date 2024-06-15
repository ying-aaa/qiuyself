import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

// import { HomeComponent } from "";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet (activate)="onActivateComponent($event)" #outlet="outlet"></router-outlet>
  `
})
export class AppComponent {
  title = "qiuyself";

  constructor() {}

  onActivateComponent($event: any): void {
    console.log("%c Line:29 🍒 $event", "color:#2eafb0", $event);
    // @ts-ignore
    document && (document.querySelector(".qy-loading").style.display = "none");
  }
}
