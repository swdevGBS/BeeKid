import {Injectable} from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot

} from "@angular/router";
import {LoopBackAuth} from "../../api";
import { Observable, of } from 'rxjs/';
import { delay } from 'rxjs/operators';
@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService: LoopBackAuth, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.authService.getCurrentUserData()){
      console.log("You must to login!");
      of(true)
      .pipe(delay(500))
      .subscribe(()=>{
        this.router.navigate(['auth']);
      });
      return false;
    }
    return true;
  }
}
