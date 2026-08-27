import { Component } from '@angular/core';
@Component({ selector: 'app-root', template: `<app-header *ngIf="!isAdminRoute()"></app-header><main><router-outlet></router-outlet></main><app-footer *ngIf="!isAdminRoute()"></app-footer>` })
export class AppComponent { isAdminRoute(): boolean { return location.pathname.startsWith('/admin'); } }
