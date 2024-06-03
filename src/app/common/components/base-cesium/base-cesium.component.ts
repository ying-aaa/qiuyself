import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, ElementRef, TemplateRef, viewChild, AfterViewInit, inject, Input } from "@angular/core";

import { QyCesiumService } from "../../services/base-cesium.service";

@Component({
  selector: "qy-base-cesium",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [ngStyle]="styles" #cesiumContainer id="cesium-container"></div>
  `,
  styles: `
    :host {
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseCesiumComponent implements AfterViewInit {
  @Input("styles") styles = {};
  cesiumInstance: TemplateRef<Element> | any = viewChild<ElementRef>("cesiumContainer");

  public cesiumService = inject(QyCesiumService);

  ngAfterViewInit(): void {
    this.cesiumService.initCesium(this.cesiumInstance().nativeElement);
  }
}
