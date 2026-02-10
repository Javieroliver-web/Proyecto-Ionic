import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  users: any[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.loadUsers().subscribe((data: any) => {
      this.users = data.results;
    });
  }
}

