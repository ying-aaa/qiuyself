import { Injectable } from "@angular/core";

// import cesium from "@app/config/lib/cesium";

@Injectable({
  providedIn: "root"
})
export class QyCesiumService {
  viewer: any;
  initCesium(cesiumContainer: Element): void {
    this.viewer = new (Cesium as any).Viewer(cesiumContainer, {
      geocoder: false,
      infoBox: false,
      imageryProvider: new Cesium.UrlTemplateImageryProvider({
        url: "https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
        minimumLevel: 1,
        maximumLevel: 18
      })
    });
  }

  flight(): void {
    setTimeout(() => {
      // 使相机飞到当前位置
      this.viewer.camera.flyTo({
        // destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, altitude),
        destination: Cesium.Cartesian3.fromDegrees(119.296494, 26.074508, 1000),
        duration: 5 // 动画持续时间，单位为秒
      });
    }, 2000);
  }
}
