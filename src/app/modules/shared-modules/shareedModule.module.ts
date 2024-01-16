import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ShortenString } from "src/app/pipes/shortenString.pipe";

@NgModule({

    declarations:[
        ShortenString
    ],
    imports:[
        BrowserModule,
        
    ],
    exports:[ShortenString]

})

export class SharedModule{}