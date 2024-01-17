import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";

import { ChildComponent } from "./communication/child/child.component";
import { ParetComponent } from "./communication/paret/paret.component";
import { ObservableComponent } from "./rxjs/observable/observable.component";
import { RoutingComponent } from "./routing/routing/routing.component";

const routes: Routes=[
    {path:'',component:RoutingComponent},
    {path:'child',component:ChildComponent},
    {path:'parent',component:ParetComponent},
    {path:'observable',component:ObservableComponent}
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class MyRoutingModeule{}