import { Component, OnInit, Input} from '@angular/core';
import {OpenweathermapService} from '../../services/openweathermap.service';
import {LocationWeather} from '../../services/location-weather';

export enum WeatherGraphType{
	Temperature,
	Humidity,
	Pressure
}

@Component({
	selector: 'app-weather-graph',
	templateUrl: './weather-graph.component.html',
	styleUrls: ['./weather-graph.component.scss']
})
export class WeatherGraphComponent implements OnInit {

	@Input() type: WeatherGraphType;
	public title: string = 'Data';

	// lineChart
	public lineChartData:Array<number> = [];
    public lineChartLabels:Array<any> = [];
    public lineChartType:string = 'line';
	public lineChartColors: Array<any> = [{
		backgroundColor: 'rgba(41,128,185,0.2)',
		borderColor: '#2980b9',
		pointBackgroundColor: '#2980b9',
		pointBorderColor: '#2980b9',
		pointHoverBackgroundColor: '#2980b9',
		pointHoverBorderColor: '#2980b9'
	}];
	public lineChartOptions: any = {
	    responsive: true,
		title: {
			display: false
		},
		legend: {
			display: false
		},
		scales:{
            yAxes: [{
                display: true,
                gridLines:{
                    drawBorder: false,
                    display: false
                },
                ticks:{
                    display: false
                }
            }],
            xAxes: [{
                display: true,
                gridLines:{
                    drawBorder: false,
                    display: false
                },
                ticks:{
                    display: false
                }
            }]
        }
	};

	public locationWeather: LocationWeather;

	constructor(private weatherService: OpenweathermapService) {
		this.weatherService.dataChanged.subscribe(locationWeather => this.onItemChanged(locationWeather));
	}

	ngOnInit() {
		console.log('ngOnInit: ' + this.type);
		switch(this.type){
			case WeatherGraphType.Temperature:{
				this.title = 'Temperature'
				break;
			}
			case WeatherGraphType.Humidity:{
				this.title = 'Humidity'
				break;
			}
			case WeatherGraphType.Pressure:{
				this.title = 'Pressure'
				break;
			}
		}
	}

	private onItemChanged(item: LocationWeather): void {
		console.log('WeatherGraphComponent::onItemChanged');

		// Get the data regarding the type
		switch(this.type){
			case WeatherGraphType.Temperature:{
				this.lineChartData = item.getTemperatures();
				break;
			}
			case WeatherGraphType.Humidity:{
				this.lineChartData = item.getHumidities();
				break;
			}
			case WeatherGraphType.Pressure:{
				this.lineChartData = item.getPressures();
				break;
			}
		}

		this.lineChartLabels = item.getTimeLine();
	}

}
