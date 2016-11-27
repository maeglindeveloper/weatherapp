import { Component, OnInit } from '@angular/core';
import {OpenweathermapService} from '../../services/openweathermap.service';
import {LocationWeather} from '../../services/location-weather';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

	public searchedLocation: string = 'Paris';
	public locationWeather:LocationWeather = new LocationWeather('Paris');

	// Constructor
	constructor(private weatherService: OpenweathermapService) {
	}

	ngOnInit() {
		this.search();
	}

	// Search weather
	search(){
		this.weatherService.getWeatherLocation(this.searchedLocation)
			.subscribe(locationWeather => {
				this.locationWeather = locationWeather;
				this.weatherService.getForecastWeatherLocation(this.locationWeather.name).subscribe(locationWeather => {
					this.locationWeather = locationWeather;
				});
		});
	}

}
