import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, effect, OnInit, viewChild, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { customAlphabet } from "nanoid";
import { PanelMenuModule } from "primeng/panelmenu";

import { QyMenuFileHandleComponent } from "./common/menu-file-handle/menu-file-handle.component";
import { QMenuFileType } from "../../../type/qy-lowcode-home.typs";
import { QyLowcodeService } from "../../services/qy-lowcode.service";

@Component({
  selector: "qy-menu-file",
  standalone: true,
  imports: [CommonModule, PanelMenuModule, FormsModule, QyMenuFileHandleComponent],
  templateUrl: "./menu-file.component.html",
  styles: `
    :host {
      width: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QyMenuFileComponent implements OnInit {
  panelMenu: any = viewChild("PanelMenu");
  QMenuFileType = QMenuFileType;

  constructor(
    public qyLowcodeService: QyLowcodeService,
    private cdr: ChangeDetectorRef
  ) {}

  menuFiles = [];
  ngOnInit(): void {
    this.qyLowcodeService.menuFiles$.subscribe(res => {
      this.menuFiles = res;
      console.log("%c Line:35 🥓 res", "color:#2eafb0", this.menuFiles, this.panelMenu().cd.detectChanges);
      this.panelMenu().cd.detectChanges();
      this.cdr.detectChanges();
    });
    this.qyLowcodeService.menuFiles$.next([
      {
        label: "APP",
        icon: "pi pi-copy",
        type: QMenuFileType.directory,
        nanoid: `qiuy1${customAlphabet("0123456789", 13)()}`,
        items: []
      }
    ]);
    console.log("%c Line:44 🧀", "color:#6ec1c2", this.qyLowcodeService.menuFiles$);
  }
}
