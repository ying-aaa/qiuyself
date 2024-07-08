import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent } from "./app/app.component";
import { appConfig } from "./app/app.config";

// eslint-disable-next-line import/no-unassigned-import
import "./config/index";

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
