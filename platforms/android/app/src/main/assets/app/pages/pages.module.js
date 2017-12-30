"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var pages_routing_module_1 = require("./pages.routing.module");
var pages_component_1 = require("./pages.component");
var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        core_1.NgModule({
            declarations: [pages_component_1.PagesComponent].concat(pages_routing_module_1.RoutableComponents),
            imports: [nativescript_module_1.NativeScriptModule, pages_routing_module_1.PagesRoutingModule],
            schemas: [core_1.NO_ERRORS_SCHEMA],
            exports: [pages_component_1.PagesComponent]
        })
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFnZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELGdGQUE4RTtBQUU5RSwrREFBZ0Y7QUFDaEYscURBQW1EO0FBUW5EO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFdBQVc7UUFOdkIsZUFBUSxDQUFDO1lBQ1IsWUFBWSxHQUFHLGdDQUFjLFNBQUsseUNBQWtCLENBQUM7WUFDckQsT0FBTyxFQUFFLENBQUMsd0NBQWtCLEVBQUUseUNBQWtCLENBQUM7WUFDakQsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7WUFDM0IsT0FBTyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztTQUMxQixDQUFDO09BQ1csV0FBVyxDQUFHO0lBQUQsa0JBQUM7Q0FBQSxBQUEzQixJQUEyQjtBQUFkLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcblxuaW1wb3J0IHsgUGFnZXNSb3V0aW5nTW9kdWxlLCBSb3V0YWJsZUNvbXBvbmVudHMgfSBmcm9tIFwiLi9wYWdlcy5yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgUGFnZXNDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbUGFnZXNDb21wb25lbnQsIC4uLlJvdXRhYmxlQ29tcG9uZW50c10sXG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRNb2R1bGUsIFBhZ2VzUm91dGluZ01vZHVsZV0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbiAgZXhwb3J0czogW1BhZ2VzQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBQYWdlc01vZHVsZSB7fVxuIl19