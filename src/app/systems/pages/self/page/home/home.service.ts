import { Injectable } from "@angular/core";
import { QyCesiumService } from "@app/widget/base-cesium/base-cesium.service";

@Injectable({
  providedIn: "root"
})
export class QyHomeService {
  isFootprintMode: boolean = false;
  constructor(private qyCesiumService: QyCesiumService) {}

  getFootprintMode(): boolean {
    return this.isFootprintMode;
  }

  setFootprintMode(FootprintModeValue: boolean): void {
    this.isFootprintMode = FootprintModeValue;
  }
}
