import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Signal, signal, viewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";

import { LanguageComponent } from "@app/common/component/language/language.component";
import { QiuyLogoComponent } from "@app/common/component/qiuy-logo/qiuy-logo.component";
import { UiverseSwitchFootprintComponent } from "@app/common/uiverse/switch-footprint/uiverse-switch-footprint.component";
import { BaseCesiumComponent } from "@app/widget/base-cesium/base-cesium.component";
import { QyCesiumService } from "@app/widget/base-cesium/base-cesium.service";

import { QyHomeService } from "./home.service";
import { MenuComponent } from "./menu/menu.component";

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
    <div class="self-container self-backdrop-fit">
      <qy-qiuy-logo class="cursor-pointer" (click)="flyto()"></qy-qiuy-logo>
      <qy-language></qy-language>

      <!-- <div class="shape qiuy-photo"></div> -->
      <div class="shape qiuy-photo-bg">
        <div class="absolute z-999 w-306px font-bold -right-105% -translate-x-50% top-202px">
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
        <img src="assets/home/qiuy.pic.jpg" class="backdrop-fit" width="100%" height="100%" />
      </div>
      <qy-menu></qy-menu>
      <qy-base-cesium [styles]="cesiumStyle"></qy-base-cesium>
      <div class="text-#fff absolute bottom-50px right-50px">
        111{{ homeService.isFootprintMode }}
        <uiverse-switch-footprint [isFootprintMode]="homeService.isFootprintMode" [switchEvent]="homeService.setFootprintMode"></uiverse-switch-footprint>
      </div>
    </div>
  `,
  styleUrl: "./home.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, BaseCesiumComponent, QiuyLogoComponent, LanguageComponent, MenuComponent, UiverseSwitchFootprintComponent]
})
export class HomeComponent implements AfterViewInit {
  baseCesium = viewChild.required(BaseCesiumComponent);

  public cesiumService = inject(QyCesiumService);
  public homeService = inject(QyHomeService);
  public cdr = inject(ChangeDetectorRef);

  cesiumStyle = cesiumStyle;

  ngAfterViewInit(): void {
    this.flyto();

    setTimeout(() => {
      this.homeService.setFootprintMode(false);
      this.cdr.detectChanges();
    }, 2000);
  }

  flyto(): void {
    this.baseCesium().cesiumService.flight();
  }
}
