import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-nuevo',
    templateUrl: './nuevo.page.html',
    styleUrls: ['./nuevo.page.scss'],
})
export class NuevoPage implements OnInit {

    UsuarioData: any;

    constructor(
        public apiService: ApiService,
        public router: Router
    ) {
        this.UsuarioData = new Usuario();
    }

    ngOnInit() {
    }

    createItem() {
        this.apiService.createItem(this.UsuarioData).subscribe(response => {
            this.router.navigate(['home']);
        });
    }

}
