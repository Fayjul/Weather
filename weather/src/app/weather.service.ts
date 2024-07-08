import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://weather-api-by-any-city.p.rapidapi.com/weather';
  private apiKey = '84c935bf87msh413d51f1a647058p1d490cjsn17feaf06dcb6';

  constructor(private http: HttpClient) {}

  getTemparature(city: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'weather-api-by-any-city.p.rapidapi.com', // Replace with the actual API host
      'x-rapidapi-key': this.apiKey,
    });

    const option = { headers };

    return this.http.get(`${this.apiUrl}/${city}`, option);
  }
}
