import { Injectable } from "@angular/core";
// declare var Cesium: any;
@Injectable({
  providedIn: "root"
})
export class QyCesiumService {
  viewer: any;
  initCesium(cesiumContainer: Element): void {
    this.viewer = new Cesium.Viewer(cesiumContainer, {
      orderIndependentTranslucency: true,
      geocoder: true,
      infoBox: false,
      imageryProvider: new Cesium.UrlTemplateImageryProvider({
        url: "https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
        minimumLevel: 1,
        maximumLevel: 18
      }),
      skyAtmosphere: false,
      backgroundColor: Cesium.Color.TRANSPARENT,
      homeButton: false, //隐藏视角返回初始位置按钮
      sceneModePicker: false, //隐藏视角模式3D 2D CV
      // baseLayerPicker: false, //隐藏图层选择
      navigationHelpButton: false, //隐藏帮助
      animation: false, //隐藏动画控件
      timeline: false, //隐藏时间线控件
      fullscreenButton: false //隐藏全屏
    });
    this.viewer._cesiumWidget._creditContainer.style.display = "none";
    this.viewer.scene.skyBox.show = false; //关闭天空盒，否则会显示天空颜色
    this.viewer.scene.undergroundMode = true; //重要，开启地下模式，设置基色透明，这样就看不见黑色地球了
    this.viewer.scene.backgroundColor = Cesium.Color.RED;

    this.flight();
  }

  flight(): void {
    this.viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(127.550997, 10.239732, 4715877.726592621),
      orientation: {
        heading: 5.668728772778289,
        pitch: -0.9946727905966384,
        roll: 6.282785849055653
      },
      duration: 5 // 动画持续时间，单位为秒
    });
  }
  flight1(): void {
    // 获取 相机姿态信息
    var head = this.viewer.scene.camera.heading;
    var pitch = this.viewer.scene.camera.pitch;
    var roll = this.viewer.scene.camera.roll;
    var info = { head: head, pitch: pitch, roll: roll };
    console.log("%c Line:112 🥟 info", "color:#4fff4B", info);
    // 获取位置 wgs84的地心坐标系，x,y坐标值以弧度来表示
    var position = this.viewer.scene.camera.positionCartographic;
    var longitude = Cesium.Math.toDegrees(position.longitude).toFixed(6);
    console.log("%c Line:116 🌭 longitude", "color:#ea7e5c", longitude);
    var latitude = Cesium.Math.toDegrees(position.latitude).toFixed(6);
    console.log("%c Line:118 🥤 latitude", "color:#ed9ec7", latitude);
    var height = position.height;
    console.log("%c Line:120 🍭 height", "color:#4fff4B", height);

    // let str = `级数：${level} 视高：${alt}km  方位角：${heading}° 俯仰角：${pitch}° 翻滚角：${roll}°`;
    // console.log(str);
  }
}
