import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-editar',
    templateUrl: './editar.page.html',
    styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

    id: number = 0;
    UsuarioData: any;
    Data: any;

    constructor(
        public activatedRoute: ActivatedRoute,
        public router: Router,
        public apiService: ApiService
    ) {
        this.UsuarioData = new Usuario();
    }

    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params['id'];
        this.apiService.getItem(this.id).subscribe(response => {
            this.UsuarioData = response;
        })
    }

    update() {
        this.apiService.updateItem(this.id, this.UsuarioData).subscribe(response => {
            this.router.navigate(['home']);
        })
    }

}
