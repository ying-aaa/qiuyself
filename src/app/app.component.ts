import { DOCUMENT } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet (activate)="onActivateComponent($event)" #outlet="outlet"></router-outlet>
  `
})
export class AppComponent implements OnInit {
  private readonly doc = inject(DOCUMENT);
  constructor() {}

  ngOnInit(): void {}

  onActivateComponent($event: any): void {
    this.doc.querySelector(".qy-loading")?.remove();
  }
}
