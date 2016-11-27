import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { NotificationService } from '../../services/notification.service';

// User class
class User{
	username: string = "";
	password: string = "";
}

@Component({
	selector: 'app-authentication',
	templateUrl: './authentication.component.html',
	styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

	user: User = new User();

	// Constructeur
	constructor(private router: Router, private authenticationService: AuthenticationService, private notificationService: NotificationService)
	{
	}

	ngOnInit() {
	}

	// Login
	login()
	{
		if (!this.authenticationService.login(this.user))
		{
 			this.notificationService.error("Connection", "Invalid Credentials");
			return;
		}
		this.notificationService.info("Connection", "You are now logged in :D");
		this.router.navigate(['weather']);
	}

	isHidden(){
		return this.authenticationService.isLogged();
	}

}
