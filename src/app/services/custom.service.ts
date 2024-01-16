import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class CustomService {

    findSquare(input:number){
        return input*input
    }
}