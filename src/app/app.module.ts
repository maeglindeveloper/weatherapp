// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Logger } from "angular2-logger/core";
import { RouterModule } from '@angular/router';

// Constantes
import { ROUTES } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherGraphComponent } from './components/weather-graph/weather-graph.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { NotificationComponent } from './components/notification/notification.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

// Services
import { BaseService} from './services/base.service';
import { OpenweathermapService} from './services/openweathermap.service';
import { AuthenticationService} from './services/authentication.service';
import { NotificationService} from './services/notification.service';

@NgModule({
	declarations: [
		AppComponent,
		WeatherComponent,
		AuthenticationComponent,
		NotificationComponent,
		WeatherGraphComponent,
		BaseChartDirective,
		HomeComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(ROUTES)
	],
	providers: [
		OpenweathermapService,
		AuthenticationService,
		NotificationService,
		Logger
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
