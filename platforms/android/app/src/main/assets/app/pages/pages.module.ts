import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { PagesRoutingModule, RoutableComponents } from "./pages.routing.module";
import { PagesComponent } from "./pages.component";

@NgModule({
  declarations: [PagesComponent, ...RoutableComponents],
  imports: [NativeScriptModule, PagesRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [PagesComponent]
})
export class PagesModule {}
