import { Injectable, signal } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

import { customAlphabet } from "nanoid";
import { MenuItem } from "primeng/api";

import { QMenuFileType } from "../../type/qy-lowcode-home.typs";

@Injectable({
  providedIn: "root"
})
export class QyLowcodeService {
  public activeMenuFile$ = new Subject<string>();

  public menuFiles$ = new BehaviorSubject<MenuItem[] | any>([]);

  constructor() {}
}
