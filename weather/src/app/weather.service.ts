import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://weather-api-by-any-city.p.rapidapi.com/weather';
  private apiKey = '84c935bf87msh413d51f1a647058p1d490cjsn17feaf06dcb6';

  constructor(private http: HttpClient) {}

  getTemparature(city: string) {
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'api.example.com', // Replace with the actual API host
      'x-rapidapi-key': this.apiKey
    });
    
    let temperature = Math.random() * 30 + 10;

    return Math.ceil(temperature) % 50;
  }
}
