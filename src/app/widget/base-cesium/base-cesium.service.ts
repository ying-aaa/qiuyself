// @ts-nocheck
import { Injectable } from "@angular/core";

import { CesiumWidget, Viewer } from "cesium";

declare var Cesium: CesiumWidget;
export type ChinaViewsConfigProps = "HalfRound" | "OverLooking";

@Injectable({
  providedIn: "root"
})
export class QyCesiumService {
  public viewer: Viewer;

  // 基础中国视角
  chinaViewsConfig: ChinaViewsConfig = {
    // 半圆地球
    HalfRound: {
      destination: {
        longitude: 127.550997,
        latitude: 10.239732,
        height: 4715877.726592621
      },
      orientation: {
        heading: 5.668728772778289,
        pitch: -0.9946727905966384,
        roll: 6.282785849055653
      }
    },
    OverLooking: {
      destination: {
        longitude: 110.12943497951528,
        latitude: 28.37427760251988,
        height: 3383317.4625302786
      },
      orientation: {
        heading: 5.758286680909266,
        pitch: -1.5511250954360136,
        roll: 0
      }
    }
  };

  initCesium(cesiumContainer: Element): void {
    this.viewer = new Cesium.Viewer(cesiumContainer, {
      terrain: Cesium.Terrain.fromWorldTerrain({
        requestWaterMask: true,
        requestVertexNormals: true
      }),
      geocoder: false,
      infoBox: false,
      skyAtmosphere: false,
      homeButton: false, //隐藏视角返回初始位置按钮
      sceneModePicker: false, //隐藏视角模式3D 2D CV
      baseLayerPicker: false, //隐藏图层选择
      navigationHelpButton: false, //隐藏帮助
      animation: false, //隐藏动画控件
      timeline: false, //隐藏时间线控件
      fullscreenButton: false, //隐藏全屏
      contextOptions: {
        webgl: {
          alpha: true
        }
      }
    });
    this.viewer.scene.skyBox.show = false; //关闭天空盒，否则会显示天空颜色
    this.viewer.scene.backgroundColor = new Cesium.Color(0.0, 0.0, 0.0, 0.0);
    this.viewer.scene.globe.enableLighting = true;

    this.viewer.clock.currentTime = Cesium.JulianDate.fromIso8601(
      "2023-01-01T12:08:00"
    );

    this.viewer.camera.moveEnd.addEventListener(() => {
      // 获取相机的地理位置信息
      let cartographicPosition = this.viewer.camera.positionCartographic;
      let longitude = Cesium.Math.toDegrees(cartographicPosition.longitude); // 经度
      let latitude = Cesium.Math.toDegrees(cartographicPosition.latitude); // 纬度
      let height = cartographicPosition.height; // 高度，单位为米

      // 获取相机的方向信息
      let heading = this.viewer.camera.heading; // 方位角，单位为度
      let pitch = this.viewer.camera.pitch; // 俯仰角，单位为度
      let roll = this.viewer.camera.roll; // 翻滚角，单位为度

      console.log("%c Line:49 🥑", "color:#e41a6a", this.viewer.camera);
      // 打印参数
      console.log("Destination:", {
        longitude: longitude,
        latitude: latitude,
        height: height
      });
      console.log("Orientation:", {
        heading: heading,
        pitch: pitch,
        roll: roll
      });
    });

    this.initClickEvent();
  }

  addEntity(): void {
    this.viewer.entities.add({
      name: "Earth",
      show: true,
      position: {
        x: -2003005.1032521657,
        y: 4995533.494049504,
        z: 3410987.2978949808
      },
      label: {
        text: "我的家",
        font: "18px sans-serif",
        style: Cesium.LabelStyle.FILL,
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2
      },
      billboard: {
        image: "assets/material/blue-border-bg.png",
        width: 300,
        height: 158,
        verticalOrigin: Cesium.VerticalOrigin.CENTER,
        horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
        pixelOffset: new Cesium.Cartesian2(0, 0)
      }
    });
  }

  flightChinas(ChinaViewsConfig): void {
    const fromDegreesConfig = Object.values(
      this.chinaViewsConfig[ChinaViewsConfig].destination
    );
    this.viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(...fromDegreesConfig),
      orientation: this.chinaViewsConfig[ChinaViewsConfig].orientation,
      duration: 2.5 // 动画持续时间，单位为秒
    });
  }

  initClickEvent(): void {
    // return;
    new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas).setInputAction(
      movement => {
        // 获取点击位置的笛卡尔坐标
        const position =
          {
            x: -2003005.1032521657,
            y: 4995533.494049504,
            z: 3410987.2978949808
          } || this.viewer.scene.pickPosition(movement.position);
      },
      Cesium.ScreenSpaceEventType.LEFT_CLICK
    );
    console.log("生活常识");
  }
}

