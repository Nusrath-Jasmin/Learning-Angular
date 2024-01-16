import { Component, DoCheck, OnChanges } from "@angular/core";
import { SharedModule } from "../modules/shared-modules/shareedModule.module";
import { CustomService } from "../services/custom.service";

@Component({
    selector:'app-sample',
    templateUrl:'./sample.component.html',
    styleUrls:['./sample.component.css']
})

export class SampleComponent implements DoCheck{

    num!:number
    constructor(private service:CustomService){}
    ngDoCheck(): void {
        console.log("hi");
        
        const product=this.service.findSquare(this.num)
        console.log("product is"+product)
    }

}