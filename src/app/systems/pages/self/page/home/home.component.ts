import { AfterViewInit, ChangeDetectionStrategy, Component, inject, Signal, signal, viewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";

import { LanguageComponent } from "@app/common/component/language/language.component";
import { QiuyLogoComponent } from "@app/common/component/qiuy-logo/qiuy-logo.component";
import { BaseCesiumComponent } from "@app/widget/base-cesium/base-cesium.component";
import { QyCesiumService } from "@app/widget/base-cesium/base-cesium.service";

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
    </div>
  `,
  styles: `
    :host {
      .self-container {
        width: 100%;
        height: 100%;
        // position: relative;
        background-image: url("/assets/home/starry-sky.png");
        background-size: cover;
      }
      .self-backdrop-fit {
        background-position: -30% 50%;
        background-size: cover;
        object-fit: cover;
      }
      .shape {
        z-index: 999;
        width: 460px;
        height: 460px;
        top: 220px;
        right: 20%;
        position: absolute;
        img {
          border-radius: 73% 27% 75% 25% / 60% 72% 28% 40%;
        }
        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          transform: scale(1.25);
          left: 35%;
          bottom: -100px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 73% 27% 75% 25% / 60% 72% 28% 40%;
          backdrop-filter: blur(5px);
          z-index: -1;
        }
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, BaseCesiumComponent, QiuyLogoComponent, LanguageComponent, MenuComponent]
})
export class HomeComponent implements AfterViewInit {
  baseCesium = viewChild.required(BaseCesiumComponent);

  public cesiumService = inject(QyCesiumService);
  cesiumStyle = cesiumStyle;

  ngAfterViewInit(): void {
    this.flyto();
  }

  flyto(): void {
    this.baseCesium().cesiumService.flight();
  }
}
