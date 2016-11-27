import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
	selector: 'app-notification',
	templateUrl: './notification.component.html',
	styleUrls: ['./notification.component.css'],
	host: {
      '[class]' : 'class'
    }
})
export class NotificationComponent implements OnInit {

	private title: string;
	private message: string;
	private icon: string;
	private class: string;
	private subscription: any;

	constructor(private notificationService: NotificationService)
	{
		this.class = '';
	}

	ngOnInit() {
		this.subscription = this.notificationService.getEmitter().subscribe(
			value => this.onNewFlashNotification()
		);
	}
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	onNewFlashNotification(){
		// Get the nofication from the service
		let notification = this.notificationService.getLast();
		this.title = notification.title;
		this.message = notification.message;
		this.icon = notification.isError() ? 'fa fa-error' :((notification.isWarning()) ? 'fa fa-warning': 'fa fa-info');
		this.class = 'active';
		setTimeout(() => {
			this.class = '';
		}, 2000);
	}
}
