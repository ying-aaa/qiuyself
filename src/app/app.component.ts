import { DOCUMENT } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { FilterMatchMode, PrimeNGConfig } from "primeng/api";

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
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.csp.set({ nonce: "..." });
    this.primengConfig.ripple = true;
    this.primengConfig.zIndex = {
      modal: 1100, // dialog, sidebar
      overlay: 1000, // dropdown, overlaypanel
      menu: 1000, // overlay menus
      tooltip: 1100 // tooltip
    };
    this.primengConfig.filterMatchModeOptions = {
      text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
      numeric: [
        FilterMatchMode.EQUALS,
        FilterMatchMode.NOT_EQUALS,
        FilterMatchMode.LESS_THAN,
        FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
        FilterMatchMode.GREATER_THAN,
        FilterMatchMode.GREATER_THAN_OR_EQUAL_TO
      ],
      date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
    };
  }

  onActivateComponent($event: any): void {
    this.doc.querySelector(".qy-loading")?.remove();
  }
}
