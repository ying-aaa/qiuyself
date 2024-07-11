import { Injectable, signal } from "@angular/core";
import { Subject } from "rxjs";

import { customAlphabet } from "nanoid";
import { MenuItem } from "primeng/api";

import { QMenuFileType } from "../../type/qy-lowcode-home.typs";

@Injectable({
  providedIn: "root"
})
export class QyLowcodeService {
  public activeMenuFile$ = new Subject<string>();

  public menuFiles = signal<MenuItem[]>([
    {
      label: "APP",
      icon: "pi pi-copy",
      type: QMenuFileType.directory,
      nanoid: `qiuy1${customAlphabet("0123456789", 13)()}`,
      items: []
    }
  ]);

  constructor() {}
}
