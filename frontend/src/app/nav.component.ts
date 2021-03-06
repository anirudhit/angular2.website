import { Component } from '@angular/core';
import {AuthService } from './auth.service'
@Component({
	selector : 'nav',
	template : `
		<mat-toolbar color="primary">
			<button *ngIf="auth.isAuthenticated" mat-button routerLink="/users">Users board</button>
			<button *ngIf="auth.isAuthenticated" mat-button routerLink="/adduser">Add user</button>
			<!-- <button mat-button routerLink="/messages">Messages</button> -->
			<span style="flex: 1 1 auto"></span>
			<!-- <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/login">Login</button> -->
			<button *ngIf="!auth.isAuthenticated" mat-button routerLink="/">Login</button>
			<!-- <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/register">Register</button> -->
			<!-- <button *ngIf="auth.isAuthenticated" mat-button routerLink="/user">Welcome {{auth.name}}</button> -->
			<span *ngIf="auth.isAuthenticated" >Welcome {{auth.name}}</span>
			<button *ngIf="auth.isAuthenticated" mat-button (click)="auth.logout()">Logout</button>
		</mat-toolbar>
	`
})
export class NavComponent {
	constructor(private auth: AuthService){}
}