import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class QyHomeService {
  isFootprintMode: boolean = false;
  constructor() {}

  getFootprintMode(): boolean {
    return this.isFootprintMode;
  }

  setFootprintMode(FootprintModeValue: boolean): void {
    this.isFootprintMode = FootprintModeValue;
  }
}
