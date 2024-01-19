import { Injectable, inject } from '@angular/core';
import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  createUrlTreeFromSnapshot
  } from '@angular/router';
import { AuthGuard } from '../services/authentication-guard.service'; // Assuming an authentication service
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
// No class declaration, directly define a function
export const adminAuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | boolean
  | UrlTree
  | Promise<boolean | UrlTree>
  | Observable<boolean | UrlTree> => {
  const isLoggedIn = inject(AuthGuard).isLoggedIn(); // Inject AuthService using `inject`
  if (isLoggedIn) {
    return true; // Allow access
  } else {
    return  createUrlTreeFromSnapshot(route,['/observable']); // Redirect to login page
  }
};


