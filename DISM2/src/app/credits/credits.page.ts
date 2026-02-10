import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-credits',
    templateUrl: './credits.page.html',
    styleUrls: ['./credits.page.scss'],
    standalone: false,
})
export class CreditsPage implements OnInit {

    constructor(private navCtrl: NavController) { }

    ngOnInit() {
    }

    regresar() {
        this.navCtrl.navigateBack('/home');
    }

}
