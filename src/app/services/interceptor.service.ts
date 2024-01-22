import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class InterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log("sending request interceptor");
        let modifiedRequest=req.clone({
            headers:req.headers.append('auth','abc')
        })
        //handling request
        // return next.handle(modifiedRequest)

        //handling response
        return next.handle(modifiedRequest).pipe(
            tap((event)=>{
                console.log(event);
                console.log("response from interceptor");
                if(event.type ===HttpEventType.Response){
                    console.log(event.body);
                    
                }   
            })
        )



        
    }
}