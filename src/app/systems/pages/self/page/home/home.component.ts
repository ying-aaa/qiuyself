import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";
import { CommonModule } from "@angular/common";
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Signal, signal, viewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

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
      <!-- 足迹模式时隐藏首页提要！ -->
      @let animationsName = qyHomeService.isFootprintMode ? "out-circle-hesitate1" : "in-circle-hesitate1";
      @let animationState = qyHomeService.isFootprintMode ? "out" : "in";
      <qy-language class="absolute z-100 left-10% top-20% clipPath-0" [class]="animationsName" [@circleAnimation]="animationState"></qy-language>

      <div class="shape qiuy-photo-bg clipPath-0" [class]="animationsName" [@circleAnimation]="animationState">
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
        <img src="assets/home/qiuy.pic2.jpg" class="backdrop-fit" width="100%" height="100%" />
      </div>
      <qy-menu></qy-menu>
      <qy-base-cesium [styles]="cesiumStyle"></qy-base-cesium>
      <div class="text-#fff absolute bottom-50px right-50px">
        {{ animationState }}
        <uiverse-switch-footprint [isFootprintMode]="qyHomeService.isFootprintMode" (onSwitchChange)="onSwitchChange($event)"></uiverse-switch-footprint>
      </div>
    </div>
  `,
  styleUrl: "./home.component.less",
  animations: [
    trigger("circleAnimation", [
      state(
        "void", // 定义一个初始状态，命名为 "void"
        style({
          clipPath: "circle(0%)" // 初始状态设置为0%
        })
      ),
      state(
        "in",
        style({
          clipPath: "circle(125%)"
        })
      ),
      state(
        "out",
        style({
          clipPath: "circle(0%)"
        })
      ),
      transition("* => in", [animate("5s cubic-bezier(.25, 1, .30, 1)", keyframes([style({ clipPath: "circle(0%)" }), style({ clipPath: "circle(40%)" }), style({ clipPath: "circle(125%)" })]))]),
      transition("* => out", [animate("3s cubic-bezier(.25, 1, .30, 1)", keyframes([style({ clipPath: "circle(125%)" }), style({ clipPath: "circle(40%)" }), style({ clipPath: "circle(0%)" })]))])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    BaseCesiumComponent,
    QiuyLogoComponent,
    LanguageComponent,
    MenuComponent,
    UiverseSwitchFootprintComponent
  ]
})
export class HomeComponent implements AfterViewInit {
  baseCesium = viewChild.required(BaseCesiumComponent);

  constructor(
    public qyHomeService: QyHomeService,
    public qyCesiumService: QyCesiumService,
    private cdr: ChangeDetectorRef
  ) {}

  // animationState: "in" | "out" = "in";
  cesiumStyle = cesiumStyle;

  ngAfterViewInit(): void {
    this.flyto("HalfRound");
  }

  onSwitchChange(value: boolean): void {
    const chinaViewType = value ? "OverLooking" : "HalfRound";
    this.flyto(chinaViewType);
    this.qyHomeService.setFootprintMode(value);
  }

  flyto(chinaViewType: string = "HalfRound"): void {
    this.qyCesiumService.flightChinas(chinaViewType);
  }
}
