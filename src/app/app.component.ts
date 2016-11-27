import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Logger } from "angular2-logger/core";


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	encapsulation: ViewEncapsulation.None,
	styleUrls: [
		'./app.component.css'
	]
})
export class AppComponent {
	title = 'Weather App title';

	constructor(private _logger: Logger){
		this._logger.error('This is a priority level 1 error message...');
	}
}
