import { Component } from '@angular/core';
import {AuthService } from './auth.service'
@Component({
	selector : 'login',
	template : `
		<mat-card class="login-wrapper login-pd text-center">

            <mat-form-field class="login-input">
                <input matInput [(ngModel)]="loginData.email" placeholder="Email" type="email">
            </mat-form-field>
            <mat-form-field class="login-input">
                <input matInput [(ngModel)]="loginData.password" placeholder="Password" type="password">
            </mat-form-field>
            <div class="margin-top-30">
                <button mat-raised-button color="primary" (click)="login()">Login</button>
            </div>
        </mat-card>
	`
})
export class LoginComponent {
    constructor(private auth: AuthService) { }

    loginData = {
        email: '',
        password: ''
    }

    login() {
        this.auth.login(this.loginData);
    }
}