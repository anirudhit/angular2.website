import { Component } from '@angular/core';
import { WebService } from './web.service';
import { AuthService } from './auth.service';

@Component({
	selector : 'new-message',
	template : `

		<mat-card class="login-wrapper login-pd text-center">

            <mat-form-field class="login-input">
                <input matInput [(ngModel)]="user.name" placeholder="Name" type="email">
            </mat-form-field>
            <mat-form-field class="login-input">
                <input matInput [(ngModel)]="user.surname" placeholder="Surname" type="email">
            </mat-form-field>
            <mat-form-field class="login-input">
                <input matInput [(ngModel)]="user.country" placeholder="Country" type="email">
            </mat-form-field>
            <div class="margin-top-30">
                <button mat-raised-button color="primary" (click)="post()">Save</button>
            </div>
        </mat-card>
	`
})
export class NewMessageComponent{

	constructor(private webService: WebService, private auth: AuthService ){}

	user = {
		name: "",
		surname: "",
		country: ""
	};



	post() {
		this.webService.postMessage(this.user);
	}

}