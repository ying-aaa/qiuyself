import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "qy-footprint-overview-fragment",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./footprint-overview-fragment.component.html",
  styleUrl: "./footprint-overview-fragment.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QyFootprintOverviewFragmentComponent {}
