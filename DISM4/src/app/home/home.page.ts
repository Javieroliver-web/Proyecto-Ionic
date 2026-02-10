/// <reference path="../../../node_modules/@capacitor/geolocation/dist/esm/index.d.ts" />
import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  latitude: number | undefined;
  longitude: number | undefined;

  constructor() { }

  async obtenerCoordenadas() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
  }
}

