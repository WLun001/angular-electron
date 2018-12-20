import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptrorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request = req.clone({
      setHeaders: {
        Authorization: `Bearer a404823a-55b8-419e-bcbf-8ebb9ff7bae3`
      }
    });

    return next.handle(request);
  }

}
