import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { QMenuFileType } from "@app/systems/pages/lowcode/type/qy-lowcode-home.typs";
import { customAlphabet } from "nanoid";
import { TieredMenuModule } from "primeng/tieredmenu";

import { QyLowcodeService } from "../../../../services/qy-lowcode.service";

@Component({
  selector: "qy-menu-file-handle",
  standalone: true,
  imports: [CommonModule, TieredMenuModule],
  template: `
    <span class="ml-auto surface-border border-round text-xs flex-center pb-3px" (mouseenter)="menu.show($event)" (mouseleave)="mouseleave($event, menu.toggle.bind(menu))" #item>
      <i class="pi pi-ellipsis-h display-none hover:block text-14px" style="color: slateblue"></i>
    </span>
    <p-tieredMenu [autoDisplay]="false" (mouseleave)="menu.hide($event)" #menu [baseZIndex]="999" [model]="child" [popup]="true" styleClass="-translate-x-50% w-120px mt-0!">
      <ng-template pTemplate="item" let-item>
        <a pRipple class="file-node flex items-center px-8px py-5px cursor-pointer text-14px" [class]="item.mClass">
          <i [class]="item.icon + ' text-primary'" class="text-12px"></i>
          <span class="ml-2">
            {{ item.label }}
          </span>
        </a>
      </ng-template>
    </p-tieredMenu>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QyMenuFileHandleComponent {
  constructor(public qyLowcodeService: QyLowcodeService) {}

  mouseleave(event: any, cb: any): void {
    if (event.toElement.classList.contains("file-node")) {
      cb(event);
    }
  }

  child = [
    {
      label: "页面",
      icon: "pi pi-plus",
      command: (event: any) => {
        const nanoid = `qiuy1${customAlphabet("0123456789", 13)()}`;
        this.qyLowcodeService.menuFiles.update((value: any) => {
          const data = this.qyLowcodeService.menuFiles();
          data[0]?.items?.push({
            label: "xxx",
            icon: "pi pi-file",
            type: QMenuFileType.directory,
            nanoid
          });
          return data;
        });
        throw "";
      }
    },
    {
      label: "目录",
      icon: "pi pi-plus",
      command: (event: any) => {
        const nanoid = `qiuy1${customAlphabet("0123456789", 13)()}`;
        // this.qyLowcodeService.menuFiles.push({
        //   label: "APP",
        //   icon: "pi pi-copy",
        //   type: QMenuFileType.directory,
        //   nanoid
        // });
        // throw "";
      }
    },
    {
      label: "重命名",
      icon: "pi pi-sync",
      command: (event: any) => {
        throw "";
      }
    },
    {
      separator: true
    },
    {
      label: "删除",
      icon: "pi pi-trash",
      mClass: "text-red hover:bg-red-1 hover:rounded-4px",
      command: (event: any) => {
        throw "";
      }
    }
  ];
}
