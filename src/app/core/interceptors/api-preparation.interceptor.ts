import { Injectable } from '@angular/core'; import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'; import { Observable } from 'rxjs';
/** Reserved for future JWT, correlation ID and uniform API error handling. */
@Injectable() export class ApiPreparationInterceptor implements HttpInterceptor { intercept(request:HttpRequest<unknown>,next:HttpHandler):Observable<HttpEvent<unknown>> { return next.handle(request); } }
