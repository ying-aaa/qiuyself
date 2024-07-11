import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { customAlphabet } from "nanoid";
import { MenuItem } from "primeng/api";
import { PanelMenuModule } from "primeng/panelmenu";

import { QyMenuFileHandleComponent } from "./common/menu-file-handle/menu-file-handle.component";
import { QMenuFileType } from "../../../type/qy-lowcode-home.typs";
import { QyLowcodeService } from "../../services/qy-lowcode.service";

class GenerationMenuFile {
  constructor(qyMenuFileComponent: QyMenuFileComponent) {
    console.log("%c Line:14 🍬 qyMenuFileComponent", "color:#e41a6a", qyMenuFileComponent);
  }
}
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
  QMenuFileType = QMenuFileType;

  constructor(public qyLowcodeService: QyLowcodeService) {}

  // itemsnode: MenuItem[] = [
  //   {
  //     label: "APP",
  //     icon: "pi pi-copy",
  //     type: QMenuFileType.directory
  //   }
  // ];

  generationMenuFile(type: string): void {
    const nanoid = `qiuy1${customAlphabet("0123456789", 13)()}`;
    this;
    throw "";
  }

  ngOnInit(): void {
    new GenerationMenuFile(this);
  }
}
