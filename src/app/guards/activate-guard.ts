import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginServices } from '../service/login-services';

export const activateGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const loginS = inject(LoginServices)
  
  if (loginS.userlogged()) {
    return true
  } else {
    router.navigateByUrl("/log-in")
    return false
  }
};
