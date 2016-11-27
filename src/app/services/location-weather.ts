class WeatherSample{
	constructor(public time: string, public temperature: number, public humidity: number, public pressure: number, public seaLevel:number){
	}
}
export class LocationWeather{
	public currentTemperature: number;
	public currentWind: number;
	public currentHumidity: number;
	public currentPressure: number;

	public samples: Array<WeatherSample> = [];

	constructor(public name: string){
	}

	resetSample(){
		this.samples = [];
	}
	addSample(time: string, temperature: number, humidity: number, pressure: number, seaLevel:number){
		this.samples.push(new WeatherSample(time, temperature, humidity, pressure, seaLevel));
	}

	getTemperatures(){
		let temperatures = [];
		this.samples.forEach(sample => {
			temperatures.push(sample.temperature);
		});

		return temperatures;
	}

	getPressures(){
		let pressures = [];
		this.samples.forEach(sample => {
			pressures.push(sample.pressure);
		});

		return pressures;
	}

	getHumidities(){
		let humidities = [];
		this.samples.forEach(sample => {
			humidities.push(sample.humidity);
		});

		return humidities;
	}

	getTimeLine(){
		let times = [];
		this.samples.forEach(sample => {
			times.push(sample.time);
		});

		return times;
	}
}
