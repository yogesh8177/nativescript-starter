import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NgModule } from '@angular/core';

export const routes = [
  { 
    path: 'pages', 
    loadChildren: './pages/pages.module#PagesModule'
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {
}