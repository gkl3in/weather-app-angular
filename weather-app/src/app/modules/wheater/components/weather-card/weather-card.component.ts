import { Component, Input } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherData } from 'src/app/models/interfaces/WeatherData';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: [],
})
export class WeatherCardComponent {
  @Input() weatherDatasInput!: WeatherData;

  minTemperatureIcon  = faTemperatureLow;
  maxTemperatureIcon  = faTemperatureHigh;
  humidityIcon        = faDroplet;
  windIcon            = faWind;
}
