import { Injectable } from '@angular/core';

// User class
export class User{
	username: string = "";
	password: string = "";
}

@Injectable()
export class AuthenticationService {

	private logged: boolean;

	constructor()
	{
		this.logged = false;
	}

	// Login
	login(user: User)
	{
		if (!this.isLogged())
		{
			if (user.username == 'maeglin')
				this.logged = true;
		}
		return this.isLogged();
	}

	// Logout
	logout()
	{
		if (this.isLogged())
			this.logged = false;
	}

	isLogged()
	{
		return this.logged;
	}
}
