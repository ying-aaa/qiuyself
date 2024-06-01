import { mergeApplicationConfig, ApplicationConfig } from "@angular/core";
import { provideServerRendering } from "@angular/platform-server";

console.log("%c Line:4 🥤", "color:#e41a6a");
import { appConfig } from "./app.config";

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering()]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
