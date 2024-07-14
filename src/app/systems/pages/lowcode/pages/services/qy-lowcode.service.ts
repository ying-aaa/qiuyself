import { Injectable, signal } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

import { customAlphabet } from "nanoid";
import { MenuItem } from "primeng/api";

import { QMenuFileType } from "../../type/qy-lowcode-home.typs";

@Injectable({
  providedIn: "root"
})
export class QyLowcodeService {
  public activeMenuFile$ = new BehaviorSubject<Object>({});

  public menuFiles$ = new BehaviorSubject<MenuItem[]>([
    {
      label: "xxx",
      icon: "pi pi-file",
      type: QMenuFileType.directory,
      id: customAlphabet("0123456789", 13)(),
      items: []
    }
  ]);

  constructor() {}

  public setDefaultMenuFiles(menuFile: MenuItem[]): void {
    this.menuFiles$.next(menuFile);
  }

  public getMenuFiles(): MenuItem[] {
    return this.menuFiles$.getValue();
  }

  public setActiveMenuFile(menuFile: Object): void {
    this.activeMenuFile$.next(menuFile);
  }

  public getActiveMenuFile(): Object {
    return this.activeMenuFile$.getValue();
  }
}
