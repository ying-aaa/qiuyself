// @ts-nocheck
import { Injectable } from "@angular/core";
declare var Cesium: any;
@Injectable({
  providedIn: "root"
})
export class QyCesiumService {
  viewer: any;
  initCesium(cesiumContainer: Element): void {
    this.viewer = new Cesium.Viewer(cesiumContainer, {
      terrain: Cesium.Terrain.fromWorldTerrain({
        requestWaterMask: true,
        requestVertexNormals: true
      }),
      geocoder: false,
      infoBox: false,
      // imageryProvider: new Cesium.UrlTemplateImageryProvider({
      //   url: "https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
      //   minimumLevel: 1,
      //   maximumLevel: 18
      // }),
      skyAtmosphere: false,
      // backgroundColor: Cesium.Color.TRANSPARENT,
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
    // set lighting to true
    this.viewer.scene.globe.enableLighting = true;

    // adjust time so scene is lit by sun
    this.viewer.clock.currentTime = Cesium.JulianDate.fromIso8601("2023-01-01T12:08:00");

    // setup alternative terrain providers
    // const ellipsoidProvider = new Cesium.EllipsoidTerrainProvider();

    // // Sine wave
    // const customHeightmapWidth = 32;
    // const customHeightmapHeight = 32;
    // const customHeightmapProvider = new Cesium.CustomHeightmapTerrainProvider({
    //   width: customHeightmapWidth,
    //   height: customHeightmapHeight,
    //   callback: function (x, y, level) {
    //     const width = customHeightmapWidth;
    //     const height = customHeightmapHeight;
    //     const buffer = new Float32Array(width * height);

    //     for (let yy = 0; yy < height; yy++) {
    //       for (let xx = 0; xx < width; xx++) {
    //         const u = (x + xx / (width - 1)) / Math.pow(2, level);
    //         const v = (y + yy / (height - 1)) / Math.pow(2, level);

    //         const heightValue = 4000 * (Math.sin(8000 * v) * 0.5 + 0.5);

    //         const index = yy * width + xx;
    //         buffer[index] = heightValue;
    //       }
    //     }

    //     return buffer;
    //   }
    // });

    // Sandcastle.addToolbarMenu(
    //   [
    //     {
    //       text: "CesiumTerrainProvider - Cesium World Terrain",
    //       onselect: function () {
    //         this.viewer.scene.setTerrain(
    //           Cesium.Terrain.fromWorldTerrain({
    //             requestWaterMask: true,
    //             requestVertexNormals: true
    //           })
    //         );
    //         this.viewer.scene.globe.enableLighting = true;
    //       }
    //     },
    //     {
    //       text: "CesiumTerrainProvider - Cesium World Terrain - no effects",
    //       onselect: function () {
    //         this.viewer.scene.setTerrain(Cesium.Terrain.fromWorldTerrain());
    //       }
    //     },
    //     {
    //       text: "CesiumTerrainProvider - Cesium World Terrain w/ Lighting",
    //       onselect: function () {
    //         this.viewer.scene.setTerrain(
    //           Cesium.Terrain.fromWorldTerrain({
    //             requestVertexNormals: true
    //           })
    //         );
    //         this.viewer.scene.globe.enableLighting = true;
    //       }
    //     },
    //     {
    //       text: "CesiumTerrainProvider - Cesium World Terrain w/ Water",
    //       onselect: function () {
    //         this.viewer.scene.setTerrain(
    //           Cesium.Terrain.fromWorldTerrain({
    //             requestWaterMask: true
    //           })
    //         );
    //       }
    //     },
    //     {
    //       text: "EllipsoidTerrainProvider",
    //       onselect: function () {
    //         this.viewer.terrainProvider = ellipsoidProvider;
    //       }
    //     },
    //     {
    //       text: "CustomHeightmapTerrainProvider",
    //       onselect: function () {
    //         this.viewer.terrainProvider = customHeightmapProvider;
    //       }
    //     },
    //     {
    //       text: "VRTheWorldTerrainProvider",
    //       onselect: function () {
    //         this.viewer.scene.setTerrain(
    //           new Cesium.Terrain(
    //             Cesium.VRTheWorldTerrainProvider.fromUrl("http://www.vr-theworld.com/vr-theworld/tiles1.0.0/73/", {
    //               credit: "Terrain data courtesy VT MÄK"
    //             })
    //           )
    //         );
    //       }
    //     },
    //     {
    //       text: "ArcGISTerrainProvider",
    //       onselect: function () {
    //         this.viewer.scene.setTerrain(
    //           new Cesium.Terrain(Cesium.ArcGISTiledElevationTerrainProvider.fromUrl("https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer"))
    //         );
    //       }
    //     }
    //   ],
    //   "terrainMenu"
    // );

    // Sandcastle.addDefaultToolbarMenu(
    //   [
    //     {
    //       text: "Mount Everest",
    //       onselect: function () {
    //         lookAtMtEverest();
    //       }
    //     },
    //     {
    //       text: "Half Dome",
    //       onselect: function () {
    //         const target = new Cesium.Cartesian3(-2489625.0836225147, -4393941.44443024, 3882535.9454173897);
    //         const offset = new Cesium.Cartesian3(-6857.40902037546, 412.3284835694358, 2147.5545426812023);
    //         this.viewer.camera.lookAt(target, offset);
    //         this.viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
    //       }
    //     },
    //     {
    //       text: "San Francisco Bay",
    //       onselect: function () {
    //         const target = new Cesium.Cartesian3(-2708814.85583248, -4254159.450845907, 3891403.9457429945);
    //         const offset = new Cesium.Cartesian3(70642.66030209465, -31661.517948317807, 35505.179997143336);
    //         this.viewer.camera.lookAt(target, offset);
    //         this.viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
    //       }
    //     }
    //   ],
    //   "zoomButtons"
    // );

    // let terrainSamplePositions;

    // // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    // function lookAtMtEverest() {
    //   const target = new Cesium.Cartesian3(300770.50872389384, 5634912.131394585, 2978152.2865545116);
    //   const offset = new Cesium.Cartesian3(6344.974098678562, -793.3419798081741, 2499.9508860763162);
    //   this.viewer.camera.lookAt(target, offset);
    //   this.viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
    // }

    // // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    // function sampleTerrainSuccess(terrainSamplePositions) {
    //   const ellipsoid = Cesium.Ellipsoid.WGS84;

    //   //By default, Cesium does not obsure geometry
    //   //behind terrain. Setting this flag enables that.
    //   this.viewer.scene.globe.depthTestAgainstTerrain = true;

    //   this.viewer.entities.suspendEvents();
    //   this.viewer.entities.removeAll();

    //   for (let i = 0; i < terrainSamplePositions.length; ++i) {
    //     const position = terrainSamplePositions[i];

    //     this.viewer.entities.add({
    //       name: position.height.toFixed(1),
    //       position: ellipsoid.cartographicToCartesian(position),
    //       billboard: {
    //         verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
    //         scale: 0.7,
    //         image: "../images/facility.gif"
    //       },
    //       label: {
    //         text: position.height.toFixed(1),
    //         font: "10pt monospace",
    //         horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
    //         pixelOffset: new Cesium.Cartesian2(0, -14),
    //         fillColor: Cesium.Color.BLACK,
    //         outlineColor: Cesium.Color.BLACK,
    //         showBackground: true,
    //         backgroundColor: new Cesium.Color(0.9, 0.9, 0.9, 0.7),
    //         backgroundPadding: new Cesium.Cartesian2(4, 3)
    //       }
    //     });
    //   }
    //   this.viewer.entities.resumeEvents();
    // }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    function createGrid(rectangleHalfSize) {
      const gridWidth = 41;
      const gridHeight = 41;
      const everestLatitude = Cesium.Math.toRadians(27.988257);
      const everestLongitude = Cesium.Math.toRadians(86.925145);
      const e = new Cesium.Rectangle(everestLongitude - rectangleHalfSize, everestLatitude - rectangleHalfSize, everestLongitude + rectangleHalfSize, everestLatitude + rectangleHalfSize);
      const terrainSamplePositions = [];
      for (let y = 0; y < gridHeight; ++y) {
        for (let x = 0; x < gridWidth; ++x) {
          const longitude = Cesium.Math.lerp(e.west, e.east, x / (gridWidth - 1));
          const latitude = Cesium.Math.lerp(e.south, e.north, y / (gridHeight - 1));
          const position = new Cesium.Cartographic(longitude, latitude);
          terrainSamplePositions.push(position);
        }
      }
      return terrainSamplePositions;
    }

    // Sandcastle.addToggleButton("Enable Lighting", this.viewer.scene.globe.enableLighting, function (checked) {
    //   this.viewer.scene.globe.enableLighting = checked;
    // });

    // Sandcastle.addToggleButton("Enable fog", this.viewer.scene.fog.enabled, function (checked) {
    //   this.viewer.scene.fog.enabled = checked;
    // });

    // Sandcastle.addToolbarButton(
    //   "Sample Everest Terrain at Level 9",
    //   function () {
    //     const terrainSamplePositions = createGrid(0.005);
    //     Promise.resolve(Cesium.sampleTerrain(this.viewer.terrainProvider, 9, terrainSamplePositions)).then(sampleTerrainSuccess);
    //     lookAtMtEverest();
    //   },
    //   "sampleButtons"
    // );

    // Sandcastle.addToolbarButton(
    //   "Sample Most Detailed Everest Terrain",
    //   function () {
    //     if (!Cesium.defined(this.viewer.terrainProvider.availability)) {
    //       window.alert("sampleTerrainMostDetailed is not supported for the selected terrain provider");
    //       return;
    //     }
    //     const terrainSamplePositions = createGrid(0.0005);
    //     Promise.resolve(Cesium.sampleTerrainMostDetailed(this.viewer.terrainProvider, terrainSamplePositions)).then(sampleTerrainSuccess);
    //     lookAtMtEverest();
    //   },
    //   "sampleButtons"
    // );

    // console.log("%c Line:9 🥤", "color:#e41a6a", Cesium.createWorldTerrain);
    // this.viewer = new Cesium.Viewer(cesiumContainer, {
    //   geocoder: false,
    //   infoBox: false,
    //   imageryProvider: new Cesium.UrlTemplateImageryProvider({
    //     url: "https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
    //     minimumLevel: 1,
    //     maximumLevel: 18
    //   }),
    //   skyAtmosphere: false,
    //   // backgroundColor: Cesium.Color.TRANSPARENT,
    //   homeButton: false, //隐藏视角返回初始位置按钮
    //   sceneModePicker: false, //隐藏视角模式3D 2D CV
    //   // baseLayerPicker: false, //隐藏图层选择
    //   navigationHelpButton: false, //隐藏帮助
    //   animation: false, //隐藏动画控件
    //   timeline: false, //隐藏时间线控件
    //   fullscreenButton: false, //隐藏全屏
    //   contextOptions: {
    //     webgl: {
    //       alpha: true
    //     }
    //   }
    // });
    // this.viewer = new Cesium.Viewer(cesiumContainer, {
    //   // terrainProvider: Cesium.createWorldTerrain(),
    //   // imageryProvider: Cesium.createWorldImagery()
    //   orderIndependentTranslucency: true,
    //   geocoder: false,
    //   infoBox: false,
    //   // imageryProvider: new Cesium.UrlTemplateImageryProvider({
    //   //   // url: "https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
    //   //   url: "http://t0.tianditu.gov.cn/vec_c/wmts?tk=3701e53466a12b0246d9ab99f305a43d",
    //   //   minimumLevel: 1,
    //   //   maximumLevel: 18
    //   // }),
    //   skyAtmosphere: false,
    //   // backgroundColor: Cesium.Color.TRANSPARENT,
    //   homeButton: false, //隐藏视角返回初始位置按钮
    //   // sceneModePicker: false, //隐藏视角模式3D 2D CV
    //   // baseLayerPicker: false, //隐藏图层选择
    //   navigationHelpButton: false, //隐藏帮助
    //   animation: false, //隐藏动画控件
    //   timeline: false, //隐藏时间线控件
    //   fullscreenButton: false, //隐藏全屏
    //   contextOptions: {
    //     webgl: {
    //       alpha: true
    //     }
    //   }
    // });
    //移除默认图层
    // this.viewer.imageryLayers.removeAll();
    // //添加arcgis地形或自定义地形
    // var terrain = new Cesium.ArcGISTiledElevationTerrainProvider({
    //   url: "https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer"
    // });
    // this.viewer.terrainProvider = terrain;
    // this.viewer._cesiumWidget._creditContainer.style.display = "none";
    // this.viewer.scene.undergroundMode = true; //重要，开启地下模式，设置基色透明，这样就看不见黑色地球了

    // this.flight();
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
