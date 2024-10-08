import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class QyHomeService {
  isFootprintMode: boolean = true;
  constructor() {}

  getFootprintMode(): boolean {
    return this.isFootprintMode;
  }

  setFootprintMode(FootprintModeValue: boolean): void {
    console.log("FootprintModeValue", FootprintModeValue);
    this.isFootprintMode = FootprintModeValue;
  }
}
