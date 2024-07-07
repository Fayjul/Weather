import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = "Today's Weather.";
  path = '../assets/rainy.jfif';
  hasCityName = false;
  cityForm: FormGroup;
  cityName = '';
  temperature = 19;
  message = '';

  /**
   *
   */
  constructor(private fb: FormBuilder, private weatherService: WeatherService) {
    this.cityForm = this.fb.group({
      city: ['', Validators.required],
    });
  }
  getCityName() {
    if (this.cityForm?.valid) {
      this.cityName = this.cityForm.value.city;
      this.hasCityName = true;
      this.temperature = this.weatherService.getTemparature(this.cityName);
      this.path =
        this.temperature > 30 ? '../assets/hot.jfif' : '../assets/cold.jfif';
      this.message =
        this.temperature > 30
          ? "It's Hot. Don't go out with out Umbrella"
          : "It's Cold. Don't go out with out winter cloths";
      if (this.temperature < 30 && this.temperature > 20)
        this.message = 'Go out, Pera nai, Chill.';
    }
  }
}
