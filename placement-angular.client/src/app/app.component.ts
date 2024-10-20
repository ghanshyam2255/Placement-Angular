import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})  
export class AppComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];

  constructor(private http: HttpClient) {}

  ngOnChanges() {
    //alert('ngOnChnages');
  }
  ngOnInit() {
    this.getForecasts();
    //alert('ngOnInit');
  }
  ngDoCheck() {
    //alert('ngDoCheck');

  }
  ngAfterViewInit() {
    //alert('ngAfterViewInit');
    this.getForecasts();
  }
 
  getForecasts() {
    this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  title = 'placement-angular.client';
}
