import { Component, DoCheck, OnChanges } from "@angular/core";
import { SharedModule } from "../modules/shared-modules/shareedModule.module";

@Component({
    selector:'app-sample',
    templateUrl:'./sample.component.html',
    styleUrls:['./sample.component.css']
})

export class SampleComponent implements DoCheck{

    ngDoCheck(): void {
        console.log("hi");
        
    }

}