import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' }) export class MockAuthService { private loggedIn = false; login(email: string, password: string): boolean { this.loggedIn = email === 'admin@rrdp.demo' && password === 'demo123'; return this.loggedIn; } isLoggedIn(): boolean { return this.loggedIn; } }
