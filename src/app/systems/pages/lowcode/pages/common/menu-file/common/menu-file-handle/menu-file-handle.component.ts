import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from "@angular/core";

import { QMenuFileType } from "@app/systems/pages/lowcode/type/qy-lowcode-home.typs";
import { home_icon } from "@app/systems/pages/self/page/home/menu/menu-icon";
import { customAlphabet } from "nanoid";
import { TieredMenuModule } from "primeng/tieredmenu";

import { QyLowcodeService } from "../../../../services/qy-lowcode.service";
export enum QSvgType {
  directory_open = "directory_open",
  directory_close = "directory_close",
  file = "file",
  renaming = "renaming",
  delete = "delete"
}
@Component({
  selector: "qy-menu-file-handle",
  standalone: true,
  imports: [CommonModule, TieredMenuModule],
  template: `
    <span class="ml-auto surface-border border-round text-xs flex-center pb-3px" (mouseenter)="menu.show($event)" (mouseleave)="handleOut($event, 'qy-menu', menu.toggle.bind(menu))" #item>
      <i class="pi pi-ellipsis-h display-none hover:block text-14px" style="color: slateblue"></i>
    </span>
    <p-tieredMenu (mouseleave)="menu.hide($event)" [autoDisplay]="false" #menu [baseZIndex]="999" [model]="child" [popup]="true" styleClass="qy-menu -translate-x-50% w-120px mt-0!">
      <ng-template pTemplate="item" let-item>
        <a pRipple class="qy-menu-item file-node flex items-center px-8px py-5px cursor-pointer text-14px" [class]="item.mClass">
          @if (item.svgType) {
            <img [src]="'assets/icons/' + item.svgType + '.svg'" class="w-15px h-15px" />
          } @else {
            <i [class]="item.icon + ' text-primary'" class="text-12px"></i>
          }
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
  QSvgType = QSvgType;

  constructor(public qyLowcodeService: QyLowcodeService) {}

  handleOut(event: any, outClassNmae: string, cb: any): void {
    if (!outClassNmae.split(".").some(name => event.toElement.classList.contains(name))) {
      cb(event);
    }
  }

  child = [
    {
      label: "页面",
      icon: "pi pi-plus",
      svgType: QSvgType.file,
      command: (event: any) => {
        const nanoid = `qiuy1${customAlphabet("0123456789", 13)()}`;
        const data = this.qyLowcodeService.menuFiles$.getValue();
        data[0]?.items?.push({
          label: "xxx",
          icon: "pi pi-file",
          type: QMenuFileType.file,
          nanoid
        });
        this.qyLowcodeService.menuFiles$.next(data);
      }
    },
    {
      label: "目录",
      icon: "pi pi-plus",
      svgType: QSvgType.directory_close,
      command: (event: any) => {
        const nanoid = `qiuy1${customAlphabet("0123456789", 13)()}`;
      }
    },
    {
      label: "重命名",
      svgType: QSvgType.renaming,
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
      svgType: QSvgType.delete,
      mClass: "text-red hover:bg-red-1 hover:rounded-4px",
      command: (event: any) => {
        throw "";
      }
    }
  ];
}
