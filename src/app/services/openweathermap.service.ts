import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BaseService } from './base.service';
import { Observable } from 'rxjs/Observable';
import { LocationWeather } from './location-weather';
import { EventEmitter } from '@angular/core';
import 'rxjs/add/operator/map';

enum ApiType {standard, forecast}

@Injectable()
export class OpenweathermapService extends BaseService{

	// Define Events
	public dataChanged: EventEmitter<LocationWeather>;

	private api: any = {
		forecastUrl: String,
		standardUrl: String,
		key: String
	};

	public locationWeather: LocationWeather = new LocationWeather('Paris');

	// Constructor
  	constructor(private http: Http) {
		super();

		console.log('OpenweathermapService::constructor');
		this.dataChanged = new EventEmitter();
		this.api.forecastUrl = "http://api.openweathermap.org/data/2.5/forecast/city?";
		this.api.standardUrl = "http://api.openweathermap.org/data/2.5/weather?";
		this.api.key = "85f2435ae48cc0a156d410735fcc1c36";
	};

	// Get Weather from a specific location
	getWeatherLocation(location: string){
		console.log('getWeatherLocation');
		return this.http.get(this.buildApiUrl(location, ApiType.standard))
			.map(res => {
				let result = res.json();
				this.locationWeather.name = result.name;
				this.locationWeather.currentTemperature = result.main.temp;
				this.locationWeather.currentPressure = result.main.pressure;
				this.locationWeather.currentHumidity = result.main.humidity;

				return this.locationWeather;
			});
	};

	// Get Weather from a specific location
	getForecastWeatherLocation(location: string){
		return this.http.get(this.buildApiUrl(location, ApiType.forecast))
		.map(res => {
			let result = res.json();
			this.locationWeather.resetSample();
			result.list.forEach(value => {
				this.locationWeather.addSample(value.dt_txt, value.main.temp, value.main.pressure, value.main.humidity, value.main.seaLevel);
			});
			this.dataChanged.emit(this.locationWeather);
			return this.locationWeather;
		});
	};
	// Build the api url regarding the type of the call
	private buildApiUrl(location: string, type: ApiType){
		return ((type == ApiType.forecast) ? this.api.forecastUrl : this.api.standardUrl) + "q=" + location + "&APPID=" + this.api.key + "&units=metric";
	};

}
