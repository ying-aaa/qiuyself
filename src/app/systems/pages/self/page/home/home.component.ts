import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Signal,
  signal,
  viewChild
} from "@angular/core";
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

import { QyFootprintOverviewFragmentComponent } from "./home-footprint-component/footprint-overview-fragment/footprint-overview-fragment.component";
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
  templateUrl: "./home.component.html",
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
      state(
        "in-fragment",
        style({
          clipPath: "inset(0 100% 100% 0)"
        })
      ),
      state(
        "out-fragment",
        style({
          clipPath: "unset"
        })
      ),
      transition("* => in", [
        animate(
          "5s cubic-bezier(.25, 1, .30, 1)",
          keyframes([
            style({ clipPath: "circle(0%)" }),
            style({ clipPath: "circle(40%)" }),
            style({ clipPath: "circle(125%)" })
          ])
        )
      ]),
      transition("* => out", [
        animate(
          "3s cubic-bezier(.25, 1, .30, 1)",
          keyframes([
            style({ clipPath: "circle(125%)" }),
            style({ clipPath: "circle(40%)" }),
            style({ clipPath: "circle(0%)" })
          ])
        )
      ]),
      transition("* => in-fragment", [
        animate(
          "2.5s cubic-bezier(.25, 1, .30, 1)",
          keyframes([
            style({ clipPath: "inset(0 0 0 0)" }),
            style({ clipPath: "inset(0 100% 100% 0)" })
          ])
        )
      ]),
      transition("* => out-fragment", [
        animate(
          "2.5s cubic-bezier(.25, 1, .30, 1)",
          keyframes([
            style({ clipPath: "inset(0 100% 100% 0)" }),
            style({ clipPath: "inset(0 0 0 0)" })
          ])
        )
      ])
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
    UiverseSwitchFootprintComponent,
    QyFootprintOverviewFragmentComponent
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
    this.qyCesiumService.addEntity();
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
