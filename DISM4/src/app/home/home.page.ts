import { Component } from '@angular/core';
import { Usuario } from '../models/usuario';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  UsuarioData: any = [];

  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.UsuarioData = [];
  }

  ionViewWillEnter() {
    this.getAllUsuarios();
  }

  getAllUsuarios() {
    this.apiService.getList().subscribe(response => {
      this.UsuarioData = response;
    })
  }

  deleteUsuario(item: Usuario) {
    this.apiService.deleteItem(item.id).subscribe(response => {
      this.getAllUsuarios();
    })
  }

}
