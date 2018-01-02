import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { PagesRoutingModule, RoutableComponents } from "./pages.routing.module";
import { PagesComponent } from "./pages.component";
import { ListDetailsService } from "../shared/services/list-details.communicate";

@NgModule({
  declarations: [PagesComponent, ...RoutableComponents],
  providers: [ListDetailsService],
  imports: [NativeScriptModule, PagesRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [PagesComponent]
})
export class PagesModule {}
