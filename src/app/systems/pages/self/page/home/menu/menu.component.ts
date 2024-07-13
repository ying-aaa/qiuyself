import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from "@angular/core";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Router, RouterModule } from "@angular/router";

// @ts-ignore
// import more from "@assets/icons/more.svg";
// console.log("%c Line:7 🍯 more", "color:#2eafb0", more);
// import { home_icon, self_icon, cooperation_icon, event_icon, search_icon, more_icon } from "./menu-icon";
// const menuIcon = {
//   home_icon,
//   self_icon,
//   cooperation_icon,
//   event_icon,
//   search_icon,
//   more_icon
// };
interface IMenuStructure {
  name: string;
  navigatorUrl: string;
  icon: string;
}
@Component({
  selector: "qy-menu",
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
  template: `
    <div class="relative z-888 h-80px flex items-center flex-row-reverse pr-10px">
      <div class="flex w-fit">
        @for (item of menus(); track $index) {
          <div routerLinkActive="active" [routerLink]="['/lowcode']" class="text-18px px-24px text-#fff cursor-pointer h-30px flex items-end font-bold hover:drop-shadow-[0px_0px_10px_#a0d8ff]">
            <img [src]="'assets/icons/' + item.icon + '.svg'" class="w-24px h-24px" />
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
  constructor(private router: Router) {}

  navigateToPage(): void {
    // 使用 Router 服务进行路由跳转
    this.router.navigate(["/desired-path"]);
  }

  menus = signal<IMenuStructure[]>([
    { name: "首页", navigatorUrl: "/lowcode", icon: "home" },
    { name: "个人集", navigatorUrl: "/lowcode", icon: "self" },
    { name: "合作集", navigatorUrl: "/lowcode", icon: "cooperation" },
    { name: "事件", navigatorUrl: "/lowcode", icon: "event" },
    { name: "", navigatorUrl: "/lowcode", icon: "search" },
    { name: "", navigatorUrl: "/lowcode", icon: "more" }
  ]);
}
