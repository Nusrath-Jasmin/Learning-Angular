import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard  {

    isLoggedIn(){
    // Replace this with your actual authentication logic
    // const isLoggedIn =true
    const isLoggedIn =false

    return isLoggedIn; // Allow access if authenticated
  }
}
