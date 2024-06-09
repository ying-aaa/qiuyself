import { ChangeDetectionStrategy, Component, inject, Signal, signal, viewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";

import { BaseCesiumComponent } from "@app/common/components/base-cesium/base-cesium.component";
import { QyCesiumService } from "@app/common/services/base-cesium.service";
import { QiuyLogoComponent } from "@app/systems/common/qiuy-logo/qiuy-logo.component";

const cesiumStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
};

@Component({
  selector: "qy-home",
  standalone: true,
  template: `
    <div class="self-container">
      <qy-qiuy-logo></qy-qiuy-logo>
      <qy-base-cesium [styles]="cesiumStyle"></qy-base-cesium>
    </div>
  `,
  styles: `
    :host {
      .self-container {
        width: 100%;
        height: 100%;
        position: relative;
        background: radial-gradient(50% 50% at 50% 50%, #001c6c 0%, #06080e 100%);
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, BaseCesiumComponent, QiuyLogoComponent]
})
export class HomeComponent {
  baseCesium = viewChild.required(BaseCesiumComponent);

  value = signal(1);

  public cesiumService = inject(QyCesiumService);
  cesiumStyle = cesiumStyle;

  constructor() {
    this.flyto();
  }

  flyto(): void {
    setTimeout(() => {
      this.baseCesium().cesiumService.flight();
    }, 1000);
  }

  flyto1(): void {
    this.baseCesium().cesiumService.flight1();
  }
}
