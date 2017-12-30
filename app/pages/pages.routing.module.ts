import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { LoginComponent } from "../pages/login/login.component";
import { ListComponent } from "../pages/list/list.component";

export const routes = [
  { 
    path: '', 
    component: LoginComponent,
  },
  {
    path: 'list',
    component: ListComponent,
    data: { title: 'List' }
  }
];

export const RoutableComponents = [
  LoginComponent,
  ListComponent
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class PagesRoutingModule {
}