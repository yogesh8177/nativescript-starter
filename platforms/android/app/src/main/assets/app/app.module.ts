import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule, NSModuleFactoryLoader } from "nativescript-angular/router";
import { PagesModule } from './pages/pages.module';

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule, 
    NativeScriptHttpModule, 
    NativeScriptRouterModule,
    AppRoutingModule,
    PagesModule],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [{ provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }]
})
export class AppModule {}
