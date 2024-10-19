import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NzTimelineModule } from "ng-zorro-antd/timeline";
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@Component({
  selector: "qy-footprint-overview-fragment",
  standalone: true,
  templateUrl: "./footprint-overview-fragment.component.html",
  styleUrl: "./footprint-overview-fragment.component.less",
  imports: [CommonModule, NzTimelineModule, NzDropDownModule]
})
export class QyFootprintOverviewFragmentComponent {}
