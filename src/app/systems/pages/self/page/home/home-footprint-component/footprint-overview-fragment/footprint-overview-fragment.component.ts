import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { CardModule } from "primeng/card";
import { TimelineModule } from "primeng/timeline";

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}

@Component({
  selector: "qy-footprint-overview-fragment",
  standalone: true,
  imports: [CommonModule, TimelineModule, CardModule],
  templateUrl: "./footprint-overview-fragment.component.html",
  styleUrl: "./footprint-overview-fragment.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QyFootprintOverviewFragmentComponent {
  events: EventItem[];
  constructor() {
    this.events = [
      { status: "Ordered", date: "15/10/2020 10:30", icon: "pi pi-shopping-cart", color: "#9C27B0", image: "game-controller.jpg" },
      { status: "Processing", date: "15/10/2020 14:00", icon: "pi pi-cog", color: "#673AB7" },
      { status: "Shipped", date: "15/10/2020 16:15", icon: "pi pi-shopping-cart", color: "#FF9800" },
      { status: "Delivered", date: "16/10/2020 10:00", icon: "pi pi-check", color: "#607D8B" }
    ];
  }
}
