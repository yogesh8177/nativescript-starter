"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("nativescript-angular/router");
var core_1 = require("@angular/core");
var login_component_1 = require("../pages/login/login.component");
var list_component_1 = require("../pages/list/list.component");
exports.routes = [
    {
        path: '',
        component: login_component_1.LoginComponent,
    },
    {
        path: 'list',
        component: list_component_1.ListComponent,
        data: { title: 'List' }
    }
];
exports.RoutableComponents = [
    login_component_1.LoginComponent,
    list_component_1.ListComponent
];
var PagesRoutingModule = (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(exports.routes)],
            exports: [router_1.NativeScriptRouterModule],
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());
exports.PagesRoutingModule = PagesRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMucm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlcy5yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNEQUF1RTtBQUN2RSxzQ0FBeUM7QUFFekMsa0VBQWdFO0FBQ2hFLCtEQUE2RDtBQUVoRCxRQUFBLE1BQU0sR0FBRztJQUNwQjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLGdDQUFjO0tBQzFCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsTUFBTTtRQUNaLFNBQVMsRUFBRSw4QkFBYTtRQUN4QixJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO0tBQ3hCO0NBQ0YsQ0FBQztBQUVXLFFBQUEsa0JBQWtCLEdBQUc7SUFDaEMsZ0NBQWM7SUFDZCw4QkFBYTtDQUNkLENBQUE7QUFNRDtJQUFBO0lBQ0EsQ0FBQztJQURZLGtCQUFrQjtRQUo5QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsY0FBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDcEMsQ0FBQztPQUNXLGtCQUFrQixDQUM5QjtJQUFELHlCQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlc0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4uL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gXCIuLi9wYWdlcy9saXN0L2xpc3QuY29tcG9uZW50XCI7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXG4gIHsgXG4gICAgcGF0aDogJycsIFxuICAgIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnbGlzdCcsXG4gICAgY29tcG9uZW50OiBMaXN0Q29tcG9uZW50LFxuICAgIGRhdGE6IHsgdGl0bGU6ICdMaXN0JyB9XG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBSb3V0YWJsZUNvbXBvbmVudHMgPSBbXG4gIExvZ2luQ29tcG9uZW50LFxuICBMaXN0Q29tcG9uZW50XG5dXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlc1JvdXRpbmdNb2R1bGUge1xufSJdfQ==