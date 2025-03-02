import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, find, Observable } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class ApiInterseptorService implements HttpInterceptor {

  constructor(
    private _loaderservise: LoaderService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //loader staer
    console.log('loader start');
    
    // this._loaderservise.loaderbehaverSub$.next(true)
    const request = req.clone({
      setHeaders: {
        'content-type': 'application/json',
        'auth': 'Berer from Ls'
      }
    })
    this._loaderservise.loaderbehaverSub$.next(true)
    return next.handle(request)
      .pipe(
        finalize(() => {
          this._loaderservise.loaderbehaverSub$.next(false)
          console.log('loader stop');
          
        })
      )




  }
}
