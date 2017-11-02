import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
@Component({
	selector : 'messages',
	template : `
		<div *ngFor="let user of webService.messages | async">
			<mat-card class="card">
				<mat-card-title class="cursor-pointer">{{user.name}}</mat-card-title>
				<mat-card-content>
					<div>{{user.surname}}</div>
					<div>{{user.country}}</div>
				</mat-card-content>
			</mat-card>
		</div>
		<div class="exception-message">
			<div class="exception-l2"><span class="exception-l2-link" routerLink="/adduser">Add users</span></div>
		</div>
	`
})
export class MessagesComponent {
	constructor(private webService: WebService, private route: ActivatedRoute){}

	ngOnInit(){
		var name = this.route.snapshot.params.name;
		this.webService.getMessages(name);
		this.webService.getUser().subscribe();
	}
}