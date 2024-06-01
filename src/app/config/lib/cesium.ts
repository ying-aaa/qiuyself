// import * as cesium from "cesium";
const cesiumConfig = {
  accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhY2FkZGFlYS0xYTRjLTRmOWQtOTM1Yy03MmE2NGRjZTg3NzgiLCJpZCI6MTQwMDk4LCJpYXQiOjE2OTg1NzAyMDF9.LspiN3NkTxqHXPs2SZGJS3XwlcInwGRHX-8AXd7VzVw",
  baseUrl: "../../../asset/Cesium"
};

try {
  (window as any).CESIUM_BASE_URL = cesiumConfig.baseUrl;
  // cesium.Ion.defaultAccessToken = cesiumConfig.accessToken;
} catch (error) {}

// export default cesium;
