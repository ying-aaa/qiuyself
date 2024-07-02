import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

import menuIcon from "./menu-icon";

interface IMenuStructure {
  name: string;
  navigatorUrl: string;
  icon: string;
}
@Component({
  selector: "qy-menu",
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="relative z-888 h-80px flex items-center flex-row-reverse pr-10px">
      <div class="flex w-fit">
        @for (item of menus(); track $index) {
          <div class="text-18px px-24px text-#fff cursor-pointer h-30px flex items-end font-bold hover:drop-shadow-[0px_0px_10px_#a0d8ff]">
            <mat-icon [svgIcon]="item.icon" aria-hidden="false" class="w-28px! h-28px!" aria-label="Example thumbs up SVG icon"></mat-icon>
            <div *ngIf="item.name" class="lh-24px ml-8px">{{ item.name }}</div>
          </div>
        }
      </div>
    </div>
  `,
  styles: "",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.menus().forEach((menu: IMenuStructure) => {
      // @ts-ignore
      iconRegistry.addSvgIconLiteral(menu.icon, sanitizer.bypassSecurityTrustHtml(menuIcon[`${menu.icon.toUpperCase()}_ICON`]));
    });
  }

  menus = signal<IMenuStructure[]>([
    { name: "首页", navigatorUrl: "assets", icon: "home" },
    { name: "个人集", navigatorUrl: "http://localhost", icon: "self" },
    { name: "合作集", navigatorUrl: "http://localhost", icon: "cooperation" },
    { name: "事件", navigatorUrl: "http://localhost", icon: "event" },
    { name: "", navigatorUrl: "http://localhost", icon: "search" },
    { name: "", navigatorUrl: "http://localhost", icon: "more" }
  ]);
}
