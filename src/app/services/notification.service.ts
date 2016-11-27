import { Injectable } from '@angular/core';
import {EventEmitter} from '@angular/core';

// Define the notification types
enum NotificationType{
	Error,
	Warning,
	Info
}

// Class representing the notification object
class Notification{
	// Constructor
	constructor(public title: string, public message: string, public type: NotificationType){
	}

	isError(){ return this.type == NotificationType.Error; }
	isWarning(){ return this.type == NotificationType.Warning; }
	isInfo(){ return this.type == NotificationType.Info; }
}

// Class representing the NotificationService of an application
@Injectable()
export class NotificationService {

	// Array of notifications
	private notifications: Array<Notification> = [];
	private notificationChange: EventEmitter<number> = new EventEmitter();

	// Constructor
	constructor() {
	}

	// Push an error notification to the queue
	error(title: string, message: string){
		this._push(new Notification(title, message, NotificationType.Error));
	}

	// Push an information notification to the queue
	info(title: string, message: string){
		this._push(new Notification(title, message, NotificationType.Info));
	}

	// Push a warning notification to the queue
	warning(title: string, message: string){
		this._push(new Notification(title, message, NotificationType.Warning));
	}

	// Get all the notificaitons
	getAll(){
		return this.notifications;
	}

	// Get last notification
	getLast(){
		console.log(this.notifications);
		return this.notifications[0];
	}

	// Get Emitter to subscribe to the service
	getEmitter()
	{
		return this.notificationChange;
	}

	// Private push notification
	private _push(notification: Notification)
	{
		this.notifications.push(notification);
		setTimeout(() => {
			this.notifications.shift();
		}, 2000);
		this.notificationChange.emit();
	}



}
