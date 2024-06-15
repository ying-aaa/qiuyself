import { ChangeDetectionStrategy, Component, inject, Signal, signal, viewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";

import { LanguageComponent } from "@app/common/component/language/language.component";
import { QiuyLogoComponent } from "@app/common/component/qiuy-logo/qiuy-logo.component";
import { BaseCesiumComponent } from "@app/widget/base-cesium/base-cesium.component";
import { QyCesiumService } from "@app/widget/base-cesium/base-cesium.service";

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
      <qy-qiuy-logo class="cursor-pointer" (click)="flyto()"></qy-qiuy-logo>
      <qy-language></qy-language>
      <div class="absolute z-999 w-306px font-bold  left-50% -translate-x-50% top-202px">
        <div class="text-42px mb-28px">
          <div class="lh-45px text-#a193c6">Not reading</div>
          <div class="lh-45px text-#b6cfd3">poetry</div>
          <div class="lh-45px text-#90eaf2 text-right">- Record</div>
        </div>
        <div class="text-16px text-#fff">
          <div class="lh-24px">个人集，多数内容记录于此</div>
          <div class="lh-24px">基于 Angular + Nest</div>
        </div>
      </div>
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
  imports: [MatButtonModule, MatDividerModule, MatIconModule, BaseCesiumComponent, QiuyLogoComponent, LanguageComponent]
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

  // flyto1(): void {
  //   this.baseCesium().cesiumService.flight1();
  // }
}
