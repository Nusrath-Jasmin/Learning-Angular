import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'shortenString'
})

export class ShortenString implements PipeTransform{

    transform(value: string):string {
        if(typeof value!=='string'){
            return value
        }

        const shortened=value.substring(0,10);

        return (value.length>10? `${shortened}...`:shortened)
    }

}