import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { AuthenticationComponent } from './components/authentication/authentication.component'
import { WeatherComponent } from './components/weather/weather.component'

// Define the application routes
export const ROUTES: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'login', component: AuthenticationComponent },
	{ path: 'weather', component: WeatherComponent }
]
