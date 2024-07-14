import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, effect, OnInit, viewChild, ViewChild, OnDestroy } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BehaviorSubject, Subscription } from "rxjs";

import { customAlphabet } from "nanoid";
import { MenuItem } from "primeng/api";
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
export class QyMenuFileComponent implements OnInit, OnDestroy {
  panelMenu: any = viewChild("PanelMenu");
  QMenuFileType = QMenuFileType;

  menuFileSubscribe: Subscription | undefined;

  constructor(
    public qyLowcodeService: QyLowcodeService,
    private cdr: ChangeDetectorRef
  ) {}

  menuFiles: MenuItem[] = [];
  ngOnInit(): void {
    this.menuFileSubscribe = this.qyLowcodeService.menuFiles$.subscribe(res => {
      this.menuFiles = res;
      this.panelMenu().cd.detectChanges();
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.menuFileSubscribe?.unsubscribe();
  }
}
