import { mergeApplicationConfig, ApplicationConfig } from "@angular/core";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideServerRendering } from "@angular/platform-server";

import { appConfig } from "./app.config";

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering()]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
