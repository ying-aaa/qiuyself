import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AutoCompleteModule } from "primeng/autocomplete";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { FocusTrapModule } from "primeng/focustrap";
import { InputTextModule } from "primeng/inputtext";
import { OrderListModule } from "primeng/orderlist";
import { SelectButtonModule } from "primeng/selectbutton";
import { SplitterModule } from "primeng/splitter";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: "qy-lowcode-home",
  standalone: true,
  imports: [SelectButtonModule, SplitterModule, OrderListModule, AutoCompleteModule, FocusTrapModule, ButtonModule, DropdownModule, FormsModule, InputTextModule],
  templateUrl: "./qy-lowcode-home.component.html",
  styleUrl: "./qy-lowcode-home.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {
  items: any[] | undefined;

  selectedItem: any;
  selectedCity: string | undefined;

  cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" }
  ];
  suggestions: any;

  search(event: AutoCompleteCompleteEvent): void {
    this.suggestions = [...Array(10).keys()].map(item => `${event.query}-${item}`);
  }
  products: any = [
    {
      id: "1000",
      code: "f230fh0g3",
      name: "Bamboo Watch",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5
    }
  ];

  getSeverity(status: string): string | any {
    switch (status) {
      case "INSTOCK":
        return "success";
      case "LOWSTOCK":
        return "warning";
      case "OUTOFSTOCK":
        return "danger";
    }
  }
  ngOnInit(): void {}
  value!: number;

  justifyOptions: any[] = [
    { icon: "pi pi-align-left", justify: "Left" },
    { icon: "pi pi-align-right", justify: "Right" },
    { icon: "pi pi-align-center", justify: "Center" },
    { icon: "pi pi-align-justify", justify: "Justify" }
  ];
}
